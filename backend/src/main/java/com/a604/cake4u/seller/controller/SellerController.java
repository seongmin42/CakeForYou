package com.a604.cake4u.seller.controller;

import com.a604.cake4u.seller.dto.SellerLoginDto;
import com.a604.cake4u.seller.dto.SellerResponseDto;
import com.a604.cake4u.seller.dto.SellerSaveRequestDto;
import com.a604.cake4u.seller.dto.SellerUpdateDto;
import com.a604.cake4u.seller.service.SellerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@Api(value = "SellerConroller")
@RequiredArgsConstructor
public class SellerController {
    @Autowired
    private final SellerService sellerService;

    @ApiOperation(value = "판매자 회원가입")
    @PostMapping("/seller/new")
    public ResponseEntity<?> newSeller(@RequestBody SellerSaveRequestDto seller) {
        System.out.println("seller = " + seller);
        boolean rslt = sellerService.saveSeller(seller);
        Map<String, Object> msg = new HashMap<>();
        msg.put("result", false);
        msg.put("msg", "회원가입 실패");
        HttpStatus sts = HttpStatus.UNAUTHORIZED;

        if (rslt) {
            msg.put("result", true);
            msg.put("msg", "회원가입 성공");
            sts = HttpStatus.OK;
        }

        return ResponseEntity.status(sts).body(msg);
    }

    @ApiOperation(value = "판매자 로그인")
    @PostMapping("/seller/login")
    public ResponseEntity<?> login(@RequestBody SellerLoginDto seller) throws Exception{
            Map<String, Object> info = sellerService.sellerLogin(seller);
            Map<String, Object> msg = new HashMap<>();

            HttpStatus sts = HttpStatus.BAD_REQUEST;

            sts = HttpStatus.OK;
            msg.put("result", true);
            msg.put("msg", "로그인을 성공하였습니다.");
        return ResponseEntity.status(sts).body(msg);
    }

    @ApiOperation(value = "판매자 정보 조회")
    @GetMapping("/seller/info/{sellerId}")
    public ResponseEntity<?> showSellerInfo(@PathVariable Long sellerId) {
        SellerResponseDto seller = sellerService.showSellerInfo(sellerId);
        return new ResponseEntity<SellerResponseDto>(seller, HttpStatus.OK);
    }

    @ApiOperation(value = "판매자 정보 수정")
    @PostMapping("/seller/change")
    public ResponseEntity<?> changeSellerInfo(@RequestBody SellerUpdateDto seller) {
        sellerService.changeSellerInfo(seller);
        return new ResponseEntity(HttpStatus.OK);
    }
}