package com.a604.cake4u.data.dao;

import com.a604.cake4u.data.dao.inter.IBuyerDAO;
import com.a604.cake4u.data.entity.Buyer;
import com.a604.cake4u.data.repository.IBuyerRepository;
import com.a604.cake4u.exception.NotUniqueException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class BuyerDAO implements IBuyerDAO {

    private IBuyerRepository iBuyerRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(BuyerDAO.class);


    @Autowired
    public BuyerDAO(IBuyerRepository userRepository) {
        this.iBuyerRepository = userRepository;
    }

    @Override
    public boolean createUser(Buyer buyer) {
        LOGGER.info("createUser 메서드가 userDAO에서 호출되었습니다.");
        try {
            if(iBuyerRepository.findByNickname(buyer.getNickname()) != null){
                LOGGER.info("중복된 닉네임이 있습니다.");
                throw new NotUniqueException("중복된 닉네임이 있습니다.");

            };
            if(iBuyerRepository.findByEmail(buyer.getEmail()) != null){
                LOGGER.info("중복된 이메일이 있습니다.");
                throw new NotUniqueException("중복된 이메일이 있습니다.");
            }
            iBuyerRepository.save(buyer);
            LOGGER.info(buyer.getEmail() + "  회원가입 성공");
            return true;
        }catch (Exception e){
            LOGGER.debug(e.getMessage());
            e.getStackTrace();
            return false;
        }
    }

    @Override
    public Buyer getUser(String email) {
        LOGGER.info("getUser 메서드가 userDAO에서 호출되었습니다.");
        return iBuyerRepository.findByEmail(email);
    }

    @Override
    public Buyer checkNickname(String nickname) {
        LOGGER.info("checkNickname 메서드가 userDAO에서 호출되었습니다.");
        return iBuyerRepository.findByNickname(nickname);
    }

    @Override
    public List<Buyer> getAllUsers() {
        LOGGER.info("getAllUsers 메서드가 userDAO에서 호출되었습니다.");
        return (List<Buyer>) iBuyerRepository.findAll();
    }

    @Override
    public Buyer updateUser(Buyer buyer) {
        return iBuyerRepository.save(buyer);
    }

    @Override
    public boolean deleteUser(String email) {
        return false;
    }

    @Override
    public boolean banUser(String email) {
        return false;
    }

    @Override
    public boolean verifyEmail(String email, String salt) {
        Buyer selectedUser = iBuyerRepository.findByEmail(email);
        if(selectedUser != null && salt.equals(selectedUser.getEmailSalt())){
            selectedUser.setIsBan((byte)1);
            iBuyerRepository.save(selectedUser);
            return true;
        }
        return false;
    }

}
