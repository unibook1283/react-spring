package bask.bask.dto;

import bask.bask.domain.Court;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class KakaoCourtDto {

    // 본 프로젝트에서는 camelCase로 바꿀 생각해야됨.
    private String address_name;
    private String category_group_code;
    private String category_name;
    private String distance;
    @Id
    private Long id;
    private String phone;
    private String place_name;
    private String place_url;
    private String road_address_name;
    private double x;
    private double y;

    public Court toCourt() {
        return new Court(place_name, address_name, road_address_name, place_url, phone, x, y);
    }
}
