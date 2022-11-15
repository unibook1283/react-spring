package bask.bask.domain;

import bask.bask.dto.FavoriteCourtDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Court {

    public Court(String placeName, String addressName, String roadAddressName, String placeUrl,
                 String phone, double x, double y) {
        this.placeName = placeName;
        this.addressName = addressName;
        this.roadAddressName = roadAddressName;
        this.placeUrl = placeUrl;
        this.phone = phone;
        this.x = x;
        this.y = y;
    }

    @Id
    @GeneratedValue
    @Column(name = "COURT_ID")
    private Long id;

    @OneToMany(mappedBy = "court")
    private List<Favorite> favorites = new ArrayList<Favorite>();

    @Column(name = "PLACE_NAME")
    private String placeName;

    @Column(name = "ADDRESS_NAME")
    private String addressName;

    @Column(name = "ROAD_ADDRESS_NAME")
    private String roadAddressName;

    private String placeUrl;
    private String phone;
    private int goalPosts;
    private String floor;
    private String height;
    private double x;
    private double y;
    private Boolean valid;  // 관리자가 승인하기 전에는 valid가 false임.

    public FavoriteCourtDto toFavoriteCourtDto(Long favoriteId) {
        return new FavoriteCourtDto(id, placeName, addressName, roadAddressName, placeUrl, phone,
                goalPosts, floor, height, x, y, valid, favorites.size(), favoriteId);
    }
}
