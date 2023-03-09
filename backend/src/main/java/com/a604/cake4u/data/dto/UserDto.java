package com.a604.cake4u.data.dto;

import com.ssafy.realcart.data.entity.auth.ProviderType;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class UserDto {
    private int userId;
    private String username;
    private String email;
    private String nickname;
    private String password;
    private String salt;
    private String intro;
    private String profileImageUrl;
    private String refreshToken;
    private ProviderType providerType;
}
