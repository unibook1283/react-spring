package bask.bask;

import bask.bask.domain.Court;
import bask.bask.repository.CourtRepository;
import bask.bask.service.CourtService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

@ContextConfiguration
@ExtendWith(SpringExtension.class)
@Transactional
@SpringBootTest
public class CourtServiceTest {

    @Autowired
    CourtRepository courtRepository;
    @Autowired
    CourtService courtService;

    @Test
    public void 코트추가() {
        Court court = new Court();
        court.setName("qwer");

        courtService.saveCourt(court);

        Court findCourt = courtRepository.findOne(court.getId());

        Assertions.assertEquals(court, findCourt);
    }
}
