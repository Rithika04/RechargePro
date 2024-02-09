package com.example.mobilerecharge.service;

import com.example.mobilerecharge.model.RechargePlansPage;
import com.example.mobilerecharge.repository.RechargePlansPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RechargePlansPageService {

    @Autowired
    private RechargePlansPageRepository rechargePlansPageRepository;

    public List<RechargePlansPage> getAllRechargePlans() {
        return rechargePlansPageRepository.findAll();
    }

    public Optional<RechargePlansPage> getRechargePlanById(Long id) {
        return rechargePlansPageRepository.findById(id);
    }

    public RechargePlansPage saveRechargePlan(RechargePlansPage rechargePlansPage) {
        return rechargePlansPageRepository.save(rechargePlansPage);
    }

    public void deleteRechargePlan(Long id) {
        rechargePlansPageRepository.deleteById(id);
    }
}
