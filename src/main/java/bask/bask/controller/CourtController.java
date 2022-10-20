package bask.bask.controller;

import bask.bask.domain.Court;
import bask.bask.service.CourtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Map;

@RestController
public class CourtController {

//    @PostMapping("/api/court/new")
//    public String createCourt(@RequestBody Map<String, String> map) {
//        map.forEach((key, value) -> {
//            System.out.println(String.format("key : %s, value : %s, type : %s", key, value, value.getClass().getName()));
//        });
//        return "This is response";
//    }
    @Autowired
    CourtService courtService;

    @PostMapping("/api/court/new")
    public void createCourt(@RequestBody Court court) {
        Long id = courtService.saveCourt(court);
    }

    @GetMapping("/api/court")
    public List<Court> getAllCourts() {
        List<Court> courts = courtService.findCourts();
        return courts;
    }

    @GetMapping("/api/court/{courtId}")
    public Court findCourtById(@PathVariable Long courtId) {
        return courtService.findOne(courtId);
    }

    @PatchMapping("/api/court/{courtId}")
    public void updateCourt(@PathVariable Long courtId, @RequestBody Court court) {
        Court newCourt = new Court();
        newCourt.setId(courtId);
        newCourt.setPlaceName(court.getPlaceName());
        newCourt.setAddressName(court.getAddressName());
        newCourt.setRoadAddressName(court.getRoadAddressName());
        newCourt.setFloor(court.getFloor());
        newCourt.setHeight(court.getHeight());
        newCourt.setGoalPosts(court.getGoalPosts());
        courtService.saveCourt(newCourt);
    }
    // PathVariable Long courtId 받아서 court를 다시 찾는게 낫나?
    // request body로 받는게 낫겠지?

    @PostMapping("/api/court/delete")
    public Court deleteCourt(@RequestBody Court court) {
        System.out.println("court = " + court);
        courtService.removeCourt(court);
        return court;
    }
}
