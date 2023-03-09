package com.a604.cake4u.data.dao.inter;

import com.a604.cake4u.data.entity.Buyer;

import java.util.List;

public interface IBuyerDAO {
    boolean createUser(Buyer userDto);
    Buyer getUser(String email);
    Buyer checkNickname(String nickname);
    List<Buyer> getAllUsers();
    Buyer updateUser(Buyer user);
    boolean deleteUser(String email);
    boolean banUser(String email);

    boolean verifyEmail(String email, String salt);
}
