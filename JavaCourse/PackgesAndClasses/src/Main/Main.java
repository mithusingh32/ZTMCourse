package Main;

import BasicBank.Bank;

public final class Main {

    Main() {}
    public static void main(String[] args) {
        final Bank bank = new Bank(1, "Bob");
        System.out.println("Bank Account Number: " + bank.getAccountNumber());
        System.out.println("Bank Account Holder: " + bank.getAccountHolder());
        System.out.println("Bank Account Number: " + bank.getBalance());
    }
}
