package bask.bask.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteCourtDto {

    @Id
    private Long id;
    private String placeName;
    private String addressName;
    private String roadAddressName;
    private String placeUrl;
    private String phone;
    private int goalPosts;
    private String floor;
    private String height;
    private double x;
    private double y;
    private Boolean valid;
    private int favoriteMemberCnt;
    private Long favoriteId;
}
