package com.example.mobilerecharge.controller;

import com.example.mobilerecharge.model.RechargePlansPage;
import com.example.mobilerecharge.service.RechargePlansPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recharge-plans")
public class RechargePlansPageController {

    @Autowired
    private RechargePlansPageService rechargePlansPageService;

    @GetMapping
    public ResponseEntity<List<RechargePlansPage>> getAllRechargePlans() {
        List<RechargePlansPage> rechargePlans = rechargePlansPageService.getAllRechargePlans();
        return ResponseEntity.ok(rechargePlans);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RechargePlansPage> getRechargePlanById(@PathVariable Long id) {
        return rechargePlansPageService.getRechargePlanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<RechargePlansPage> createRechargePlan(@RequestBody RechargePlansPage rechargePlansPage) {
        RechargePlansPage createdRechargePlan = rechargePlansPageService.saveRechargePlan(rechargePlansPage);
        return ResponseEntity.ok(createdRechargePlan);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRechargePlan(@PathVariable Long id) {
        rechargePlansPageService.deleteRechargePlan(id);
        return ResponseEntity.noContent().build();
    }
}
