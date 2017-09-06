package org.petka.garage.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class SystemScheduler {
    private static final Logger logger = LoggerFactory.getLogger(SystemScheduler.class);

    @Scheduled(cron = "0 0/1 * * * *")
    public void registrationCleanerScheduler() {
        logger.debug("registrationCleanerScheduler is runnign.");
    }
}
