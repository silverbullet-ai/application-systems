import java.io.*;
import java.util.*;
import java.time.LocalDate;

/**
 * Budget Planner
 * A console-based personal finance tracker that lets users log income
 * and expenses, categorize transactions, and view a monthly summary.

 * Author: Aahish Aayan
 * GitHub: github.com/silverbullet-ai
 */
public class Main {

    static final String DATA_FILE = "budget_data.txt";
    static List<Transaction> transactions = new ArrayList<>();
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        loadData();
        boolean running = true;

        System.out.println("=========================================");
        System.out.println("           BUDGET PLANNER v1.0");
        System.out.println("=========================================");

        while (running) {
            printMenu();
            int choice = readInt("Choose an option: ");

            switch (choice) {
                case 1 -> addTransaction("INCOME");
                case 2 -> addTransaction("EXPENSE");
                case 3 -> viewAllTransactions();
                case 4 -> viewSummary();
                case 5 -> viewByCategory();
                case 6 -> {
                    saveData();
                    System.out.println("Data saved. Goodbye!");
                    running = false;
                }
                default -> System.out.println("Invalid option. Try again.\n");
            }
        }
        sc.close();
    }

    static void printMenu() {
        System.out.println("\n----------- MENU -----------");
        System.out.println("1. Add Income");
        System.out.println("2. Add Expense");
        System.out.println("3. View All Transactions");
        System.out.println("4. View Monthly Summary");
        System.out.println("5. View by Category");
        System.out.println("6. Save & Exit");
        System.out.println("-----------------------------");
    }

    static void addTransaction(String type) {
        System.out.print("Enter category (e.g. Food, Rent, Salary, Travel): ");
        String category = sc.nextLine().trim();

        double amount = readDouble("Enter amount (Rs.): ");

        System.out.print("Enter note (optional): ");
        String note = sc.nextLine().trim();

        Transaction t = new Transaction(type, category, amount, note, LocalDate.now());
        transactions.add(t);

        System.out.println(type + " of Rs." + amount + " added under '" + category + "'.");
    }

    static void viewAllTransactions() {
        if (transactions.isEmpty()) {
            System.out.println("No transactions recorded yet.");
            return;
        }

        System.out.println("\n----------- ALL TRANSACTIONS -----------");
        System.out.printf("%-5s %-10s %-12s %-10s %-20s %-10s%n",
                "No.", "Type", "Category", "Amount", "Note", "Date");

        int i = 1;
        for (Transaction t : transactions) {
            System.out.printf("%-5d %-10s %-12s %-10.2f %-20s %-10s%n",
                    i++, t.type, t.category, t.amount, t.note, t.date);
        }
    }

    static void viewSummary() {
        double totalIncome = 0, totalExpense = 0;

        for (Transaction t : transactions) {
            if (t.type.equals("INCOME")) totalIncome += t.amount;
            else totalExpense += t.amount;
        }

        double balance = totalIncome - totalExpense;

        System.out.println("\n----------- MONTHLY SUMMARY -----------");
        System.out.printf("Total Income   : Rs. %.2f%n", totalIncome);
        System.out.printf("Total Expense  : Rs. %.2f%n", totalExpense);
        System.out.printf("Net Balance    : Rs. %.2f%n", balance);

        if (balance < 0) {
            System.out.println("Warning: You are spending more than you earn!");
        } else {
            System.out.println("You're within budget. Keep it up!");
        }
    }

    static void viewByCategory() {
        if (transactions.isEmpty()) {
            System.out.println("No transactions recorded yet.");
            return;
        }

        Map<String, Double> categoryTotals = new TreeMap<>();

        for (Transaction t : transactions) {
            if (t.type.equals("EXPENSE")) {
                categoryTotals.merge(t.category, t.amount, Double::sum);
            }
        }

        if (categoryTotals.isEmpty()) {
            System.out.println("No expenses recorded yet.");
            return;
        }

        System.out.println("\n----------- EXPENSES BY CATEGORY -----------");
        for (Map.Entry<String, Double> entry : categoryTotals.entrySet()) {
            System.out.printf("%-15s : Rs. %.2f%n", entry.getKey(), entry.getValue());
        }
    }


    static void saveData() {
        try (PrintWriter writer = new PrintWriter(new FileWriter(DATA_FILE))) {
            for (Transaction t : transactions) {
                writer.println(t.type + "," + t.category + "," + t.amount + "," + t.note + "," + t.date);
            }
        } catch (IOException e) {
            System.out.println("Error saving data: " + e.getMessage());
        }
    }

    static void loadData() {
        File file = new File(DATA_FILE);
        if (!file.exists()) return;

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",", 5);
                if (parts.length == 5) {
                    Transaction t = new Transaction(
                            parts[0],
                            parts[1],
                            Double.parseDouble(parts[2]),
                            parts[3],
                            LocalDate.parse(parts[4])
                    );
                    transactions.add(t);
                }
            }
            System.out.println("Loaded " + transactions.size() + " past transaction(s) from file.\n");
        } catch (IOException e) {
            System.out.println("Error loading data: " + e.getMessage());
        }
    }

    static int readInt(String prompt) {
        System.out.print(prompt);
        while (!sc.hasNextInt()) {
            System.out.print("Please enter a valid number: ");
            sc.next();
        }
        int val = sc.nextInt();
        sc.nextLine(); // consume newline
        return val;
    }

    static double readDouble(String prompt) {
        System.out.print(prompt);
        while (!sc.hasNextDouble()) {
            System.out.print("Please enter a valid amount: ");
            sc.next();
        }
        double val = sc.nextDouble();
        sc.nextLine(); // consume newline
        return val;
    }
}


class Transaction {
    String type;
    String category;
    double amount;
    String note;
    LocalDate date;

    Transaction(String type, String category, double amount, String note, LocalDate date) {
        this.type = type;
        this.category = category;
        this.amount = amount;
        this.note = note;
        this.date = date;
    }
}