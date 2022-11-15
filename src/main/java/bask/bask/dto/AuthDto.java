package bask.bask.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthDto {
//    private String email;
    private Boolean isAuth;
    private Boolean isAdmin;
    private int role;
}
