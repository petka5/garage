package org.petka.garage.services;

public interface EmailService {

    public void sendSimpleMessage(String to, String subject, String text);

}
