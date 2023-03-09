package com.a604.cake4u.data.repository;

import com.a604.cake4u.data.entity.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface IBuyerRepository extends JpaRepository<Buyer, Integer> {
    Buyer findByNickname(String nickname);
    Buyer findByEmail(String email);
    Buyer saveAndFlush(Buyer buyer);

    @Query(value="select * from buyer where email = :useremail and refresh_token = :refreshtoken",nativeQuery=true)
    Buyer findByEmailAndRefreshToken(@Param("useremail")String userEmail, @Param("refreshtoken")String refreshToken);
}
