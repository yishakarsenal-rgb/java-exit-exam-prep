export interface CodeExample {
  title: string
  code: string
  explanation: string
}

export interface ConceptItem {
  term: string
  definition: string
  example?: string
}

export interface ChapterSection {
  id: string
  title: string
  content: string
  concepts?: ConceptItem[]
  codeExamples?: CodeExample[]
  keyPoints?: string[]
}

export interface ChapterContent {
  id: string
  title: string
  subtitle: string
  description: string
  sections: ChapterSection[]
}

export const CHAPTER_CONTENT: Record<string, ChapterContent> = {
  ch1: {
    id: 'ch1',
    title: 'OOP Fundamentals',
    subtitle: 'Object-Oriented Programming Principles',
    description:
      'Object-Oriented Programming (OOP) organizes software design around data (objects) rather than functions and logic. Java is a pure OOP language built on four core pillars.',
    sections: [
      {
        id: 'pillars',
        title: 'The Four Pillars of OOP',
        content:
          'Every object-oriented language is built on four foundational concepts that work together to create modular, reusable, and maintainable software.',
        concepts: [
          {
            term: 'Encapsulation',
            definition:
              'Bundling data (fields) and methods that operate on that data into a single class, while restricting direct access to internal state using access modifiers (private, protected, public).',
            example: 'A BankAccount class hides balance as private and exposes deposit()/withdraw() methods.',
          },
          {
            term: 'Inheritance',
            definition:
              'A mechanism where a new class (subclass) derives properties and behaviors from an existing class (superclass), promoting code reuse. Java supports single inheritance; multiple inheritance is achieved via interfaces.',
            example: 'Dog extends Animal — Dog inherits Animal\'s fields and methods.',
          },
          {
            term: 'Polymorphism',
            definition:
              'The ability of different classes to be treated as instances of the same superclass. Manifests as compile-time (overloading) and runtime (overriding + dynamic dispatch).',
            example: 'Animal a = new Dog(); a.speak(); — calls Dog\'s speak() at runtime.',
          },
          {
            term: 'Abstraction',
            definition:
              'Hiding complex implementation details and exposing only the essential features of an object. Achieved via abstract classes and interfaces.',
            example: 'Interface Shape declares draw() without implementation — each shape implements it differently.',
          },
        ],
      },
      {
        id: 'class-object',
        title: 'Classes vs Objects',
        content:
          'A class is a blueprint/template; an object is a runtime instance of that class with concrete state and behavior.',
        codeExamples: [
          {
            title: 'Class and Object Example',
            code: `// Class = blueprint
public class Car {
    // Fields (state)
    private String brand;
    private int year;
    
    // Constructor
    public Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    // Method (behavior)
    public void drive() {
        System.out.println(brand + " is driving!");
    }
    
    // Getter (encapsulation)
    public String getBrand() { return brand; }
}

// Object = instance
Car myCar = new Car("Toyota", 2024);
myCar.drive(); // Toyota is driving!`,
            explanation:
              'The Car class defines the template. `myCar` is an object (instance) with its own brand and year values.',
          },
        ],
      },
      {
        id: 'design',
        title: 'OOP Design Principles',
        content:
          'Beyond the four pillars, good OOP design follows SOLID principles and other best practices.',
        concepts: [
          {
            term: 'High Cohesion',
            definition: 'Each class should have a single, well-defined responsibility. Methods should be closely related to the class\'s purpose.',
          },
          {
            term: 'Low Coupling',
            definition: 'Classes should depend on each other as little as possible. Changes in one class should minimally affect others.',
          },
          {
            term: 'SOLID',
            definition: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion — five principles for robust OOP design.',
          },
        ],
        keyPoints: [
          'Classes should represent real-world entities or concepts',
          'Favor composition over inheritance when possible',
          'Program to an interface, not an implementation',
          'Open for extension, closed for modification (Open/Closed Principle)',
        ],
      },
    ],
  },

  ch3: {
    id: 'ch3',
    title: 'Classes & Objects',
    subtitle: 'Constructors, Methods & Memory Model',
    description:
      'Deep dive into Java classes: constructors, method overloading, the this keyword, static members, and Java\'s memory model.',
    sections: [
      {
        id: 'constructors',
        title: 'Constructors',
        content: 'Constructors initialize an object\'s state when it\'s created with `new`. They have the same name as the class and no return type.',
        codeExamples: [
          {
            title: 'Constructor Overloading',
            code: `public class Point {
    private double x, y;
    
    // No-arg constructor
    public Point() {
        this(0.0, 0.0); // calls two-arg constructor
    }
    
    // Two-arg constructor
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
    
    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }
}

Point origin = new Point();      // (0.0, 0.0)
Point p = new Point(3.0, 4.0);  // (3.0, 4.0)`,
            explanation: '`this()` calls another constructor of the same class. Must be the first statement in the constructor.',
          },
        ],
        keyPoints: [
          'If no constructor is defined, Java provides a default no-arg constructor',
          'Once you define any constructor, the default is no longer provided',
          'this() must be the first statement; super() must be the first statement in subclass constructors',
          'Constructors are NOT inherited',
        ],
      },
      {
        id: 'static',
        title: 'Static Members',
        content: 'Static fields and methods belong to the class, not to any object instance. They are shared across all instances.',
        codeExamples: [
          {
            title: 'Static Fields & Methods',
            code: `public class Counter {
    private static int count = 0; // shared by all instances
    private int id;
    
    public Counter() {
        count++;
        this.id = count;
    }
    
    // Static method - belongs to class
    public static int getCount() {
        return count;
    }
    
    // Instance method - belongs to object
    public int getId() {
        return id;
    }
}

Counter a = new Counter(); // count = 1
Counter b = new Counter(); // count = 2
System.out.println(Counter.getCount()); // 2
System.out.println(a.getId()); // 1
System.out.println(b.getId()); // 2`,
            explanation: 'Static members are accessed via the class name. Non-static members require an object instance.',
          },
        ],
      },
      {
        id: 'memory',
        title: 'Java Memory Model',
        content: 'Java uses different memory areas for different purposes. Understanding this is key for debugging and optimization.',
        concepts: [
          {
            term: 'Stack',
            definition: 'Stores local variables, method parameters, and call frames. LIFO structure. Each thread has its own stack.',
          },
          {
            term: 'Heap',
            definition: 'Stores all objects and arrays created with `new`. Shared among all threads. Managed by Garbage Collector.',
          },
          {
            term: 'Method Area (Metaspace)',
            definition: 'Stores class metadata, bytecode, static variables, and the constant pool.',
          },
          {
            term: 'Garbage Collection',
            definition: 'Automatic memory management — the JVM reclaims heap memory from objects with no live references.',
          },
        ],
      },
    ],
  },

  ch4: {
    id: 'ch4',
    title: 'Inheritance',
    subtitle: 'extends, super, Overriding & final',
    description:
      'Inheritance allows a class to reuse fields and methods of another class. Java supports single class inheritance and multiple interface inheritance.',
    sections: [
      {
        id: 'basics',
        title: 'Inheritance Fundamentals',
        content: 'Use `extends` to inherit from a class. The subclass gets all non-private members of the superclass.',
        codeExamples: [
          {
            title: 'Inheritance Chain',
            code: `public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " is eating.");
    }
    
    public String toString() {
        return "Animal: " + name;
    }
}

public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, String breed) {
        super(name); // MUST call parent constructor first
        this.breed = breed;
    }
    
    // Method Overriding
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food!");
    }
    
    public void bark() {
        System.out.println("Woof!");
    }
}

Dog d = new Dog("Rex", "German Shepherd");
d.eat();   // Rex is eating dog food! (overridden)
d.bark();  // Woof!
d.toString(); // inherited from Animal (then Object)`,
            explanation: '`super(name)` calls the Animal constructor. `@Override` tells the compiler to verify overriding.',
          },
        ],
        keyPoints: [
          'Java supports single inheritance — a class can extend only one class',
          'All classes implicitly extend java.lang.Object',
          'super() must be the first statement in a constructor',
          '@Override annotation validates at compile time that overriding actually occurs',
          'Private members are NOT inherited (but are still present, just inaccessible)',
        ],
      },
      {
        id: 'final',
        title: 'final Keyword',
        content: 'The `final` keyword prevents modification at three levels: variable, method, and class.',
        concepts: [
          { term: 'final variable', definition: 'A constant — cannot be reassigned after initialization. Must be initialized at declaration or in constructor.' },
          { term: 'final method', definition: 'Cannot be overridden by subclasses.' },
          { term: 'final class', definition: 'Cannot be subclassed. Example: java.lang.String is final.' },
        ],
        codeExamples: [
          {
            title: 'final Usage',
            code: `public final class ImmutablePoint {
    private final double x; // constant field
    private final double y;
    
    public ImmutablePoint(double x, double y) {
        this.x = x; // only assignable in constructor
        this.y = y;
    }
    
    // final method - cannot be overridden
    public final double distanceTo(ImmutablePoint other) {
        double dx = this.x - other.x;
        double dy = this.y - other.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}`,
            explanation: 'This class is final (no subclassing), has final fields (immutable state), and a final method.',
          },
        ],
      },
    ],
  },

  ch5: {
    id: 'ch5',
    title: 'Polymorphism',
    subtitle: 'Interfaces, Abstract Classes & Dynamic Dispatch',
    description: 'Polymorphism enables a single interface to represent multiple implementations, with the actual behavior determined at runtime.',
    sections: [
      {
        id: 'runtime-poly',
        title: 'Runtime Polymorphism',
        content: 'When a supertype reference holds a subtype object and calls an overridden method, Java resolves the call at runtime based on the actual object type.',
        codeExamples: [
          {
            title: 'Dynamic Dispatch',
            code: `abstract class Shape {
    abstract double area();
    void describe() {
        System.out.println("Area: " + area()); // dynamic dispatch!
    }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override double area() { return Math.PI * r * r; }
}

class Rectangle extends Shape {
    double w, h;
    Rectangle(double w, double h) { this.w=w; this.h=h; }
    @Override double area() { return w * h; }
}

// Polymorphic array
Shape[] shapes = { new Circle(5), new Rectangle(3,4) };
for (Shape s : shapes) {
    s.describe(); // each calls its own area()
}
// Output:
// Area: 78.539...
// Area: 12.0`,
            explanation: 'The `area()` call in `describe()` is dynamically dispatched — it calls the overridden version in each concrete subclass at runtime.',
          },
        ],
      },
      {
        id: 'interfaces',
        title: 'Interfaces',
        content: 'Interfaces define a contract of behaviors without implementation. A class can implement multiple interfaces.',
        codeExamples: [
          {
            title: 'Interface with Default Method (Java 8+)',
            code: `public interface Flyable {
    void fly(); // abstract (must implement)
    
    default String getType() { // default (optional override)
        return "Generic Flyer";
    }
    
    static Flyable create() { // static factory
        return () -> System.out.println("Flying!");
    }
}

public interface Swimmable {
    void swim();
}

// Multiple interface implementation
public class Duck implements Flyable, Swimmable {
    @Override public void fly() { System.out.println("Duck flying!"); }
    @Override public void swim() { System.out.println("Duck swimming!"); }
}

Flyable f = new Duck(); // polymorphism via interface
f.fly();
System.out.println(f.getType()); // Generic Flyer (default)`,
            explanation: 'Java 8 default methods allow adding methods to interfaces without breaking existing implementations.',
          },
        ],
        keyPoints: [
          'A class can implement multiple interfaces (unlike class inheritance)',
          'Interface constants are implicitly public static final',
          'Java 8+: default and static methods in interfaces',
          'Java 9+: private methods in interfaces (for default method code reuse)',
          'Functional interfaces have exactly one abstract method and can use lambdas',
        ],
      },
    ],
  },

  ch7: {
    id: 'ch7',
    title: 'Exception Handling',
    subtitle: 'Try-Catch-Finally, Checked vs Unchecked',
    description: 'Java\'s exception handling separates error-handling code from normal flow, making programs more robust and readable.',
    sections: [
      {
        id: 'hierarchy',
        title: 'Throwable Hierarchy',
        content: 'All exceptions and errors extend Throwable. The key distinction is checked (must handle) vs unchecked (runtime) exceptions.',
        concepts: [
          { term: 'Error', definition: 'Serious JVM problems (OutOfMemoryError, StackOverflowError). Should not be caught normally.' },
          { term: 'Checked Exceptions', definition: 'Subclasses of Exception (not RuntimeException). Compiler forces you to catch or declare. e.g., IOException, SQLException.' },
          { term: 'Unchecked Exceptions', definition: 'Subclasses of RuntimeException. Optional to catch. e.g., NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException.' },
        ],
      },
      {
        id: 'try-catch',
        title: 'Try-Catch-Finally',
        content: 'The try block contains code that may throw exceptions. catch blocks handle specific exceptions. finally always executes.',
        codeExamples: [
          {
            title: 'Complete Exception Handling',
            code: `public class FileProcessor {
    public void process(String filename) {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader(filename));
            String line;
            while ((line = reader.readLine()) != null) {
                processLine(line);
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
        } catch (IOException e) {
            System.err.println("Read error: " + e.getMessage());
        } finally {
            // Always runs - cleanup here
            if (reader != null) {
                try { reader.close(); }
                catch (IOException e) { /* ignore */ }
            }
        }
    }
}

// Java 7+ try-with-resources (preferred!)
public void processModern(String filename) throws IOException {
    try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
        String line;
        while ((line = reader.readLine()) != null) {
            processLine(line);
        }
    } // reader.close() called automatically
}`,
            explanation: 'Try-with-resources (Java 7+) automatically closes AutoCloseable resources, making code cleaner and safer.',
          },
          {
            title: 'Custom Exception & Multi-catch',
            code: `// Custom checked exception
class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Need: " + amount);
        this.amount = amount;
    }
    
    public double getAmount() { return amount; }
}

class BankAccount {
    private double balance;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance);
        }
        balance -= amount;
    }
}

// Usage with multi-catch (Java 7+)
try {
    account.withdraw(1000);
} catch (InsufficientFundsException | IllegalArgumentException e) {
    System.err.println("Error: " + e.getMessage());
}`,
            explanation: 'Custom exceptions extend Exception (checked) or RuntimeException (unchecked). Multi-catch with | reduces boilerplate.',
          },
        ],
      },
    ],
  },

  jdbc: {
    id: 'jdbc',
    title: 'JDBC — Java Database Connectivity',
    subtitle: 'SQL, Connections, Statements & ResultSets',
    description: 'JDBC provides a standard API for connecting Java applications to relational databases. It uses the driver pattern for database independence.',
    sections: [
      {
        id: 'workflow',
        title: 'JDBC 4-Step Workflow',
        content: 'Every JDBC program follows the same four steps: Load Driver → Connect → Create Statement → Execute & Process.',
        codeExamples: [
          {
            title: 'Complete JDBC Example',
            code: `import java.sql.*;

public class JdbcExample {
    static final String URL  = "jdbc:mysql://localhost/school";
    static final String USER = "root";
    static final String PASS = "password";
    
    public static void main(String[] args) {
        // Step 1: Load driver (auto in JDBC 4.0+)
        // Class.forName("com.mysql.cj.jdbc.Driver");
        
        // Step 2: Establish connection
        try (Connection conn = DriverManager.getConnection(URL, USER, PASS)) {
            
            // Step 3a: Simple Statement (avoid for user input!)
            Statement stmt = conn.createStatement();
            
            // Step 3b: PreparedStatement (safe, parameterized)
            PreparedStatement ps = conn.prepareStatement(
                "SELECT * FROM students WHERE dept = ?"
            );
            ps.setString(1, "CS");
            
            // Step 4: Execute & process ResultSet
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                System.out.printf("%s %s (%s)%n",
                    rs.getString("firstName"),
                    rs.getString("lastName"),
                    rs.getString("dept")
                );
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        // try-with-resources closes conn automatically
    }
}`,
            explanation: 'Try-with-resources ensures the Connection is closed. PreparedStatement prevents SQL injection and improves performance for repeated queries.',
          },
          {
            title: 'CRUD Operations',
            code: `// INSERT
PreparedStatement insert = conn.prepareStatement(
    "INSERT INTO students (ssn, firstName, lastName) VALUES (?, ?, ?)"
);
insert.setString(1, "123456789");
insert.setString(2, "John");
insert.setString(3, "Doe");
int rowsAdded = insert.executeUpdate();

// UPDATE
PreparedStatement update = conn.prepareStatement(
    "UPDATE students SET lastName = ? WHERE ssn = ?"
);
update.setString(1, "Smith");
update.setString(2, "123456789");
int rowsUpdated = update.executeUpdate();

// DELETE
PreparedStatement delete = conn.prepareStatement(
    "DELETE FROM students WHERE ssn = ?"
);
delete.setString(1, "123456789");
int rowsDeleted = delete.executeUpdate();

// TRANSACTION
conn.setAutoCommit(false);
try {
    insert.executeUpdate();
    update.executeUpdate();
    conn.commit(); // both succeed
} catch (SQLException e) {
    conn.rollback(); // both rolled back
}`,
            explanation: '`executeUpdate()` returns the number of affected rows. Transactions ensure all-or-nothing execution.',
          },
        ],
        keyPoints: [
          'JDBC URL format: jdbc:subprotocol://host:port/database',
          'PreparedStatement prevents SQL injection — always use it for user input',
          'Always close resources: Connection, Statement, ResultSet (try-with-resources)',
          'executeQuery() → ResultSet (for SELECT)',
          'executeUpdate() → int rows affected (for INSERT/UPDATE/DELETE/DDL)',
          'Use connection pooling (HikariCP, c3p0) in production',
        ],
      },
    ],
  },

  servlets: {
    id: 'servlets',
    title: 'Java Servlets',
    subtitle: 'HTTP Handling, Sessions & Lifecycle',
    description: 'Servlets are Java classes that handle HTTP requests and generate responses on the server side. They run inside a servlet container like Apache Tomcat.',
    sections: [
      {
        id: 'lifecycle',
        title: 'Servlet Lifecycle',
        content: 'The container manages the servlet lifecycle: init() once, service() for each request, destroy() once on shutdown.',
        concepts: [
          { term: 'init(ServletConfig config)', definition: 'Called once when servlet is loaded. Use for one-time initialization (DB connections, config loading).' },
          { term: 'service(req, resp)', definition: 'Called for every HTTP request. Dispatches to doGet(), doPost() etc. based on HTTP method.' },
          { term: 'destroy()', definition: 'Called once before servlet is unloaded. Use for cleanup (close DB connections, etc.).' },
        ],
        codeExamples: [
          {
            title: 'Complete Servlet Example',
            code: `import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

@WebServlet("/login") // annotation-based mapping
public class LoginServlet extends HttpServlet {
    
    @Override
    public void init() throws ServletException {
        // one-time initialization
        System.out.println("LoginServlet initialized");
    }
    
    @Override
    protected void doGet(HttpServletRequest req, 
                         HttpServletResponse resp)
            throws ServletException, IOException {
        // Serve the login form
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        out.println("<form method='POST' action='/login'>");
        out.println("<input name='user' /><input name='pass' type='password' />");
        out.println("<button>Login</button></form>");
    }
    
    @Override
    protected void doPost(HttpServletRequest req,
                          HttpServletResponse resp)
            throws ServletException, IOException {
        String username = req.getParameter("user");
        String password = req.getParameter("pass");
        
        if (authenticate(username, password)) {
            HttpSession session = req.getSession();
            session.setAttribute("user", username);
            resp.sendRedirect("/dashboard"); // redirect
        } else {
            req.setAttribute("error", "Invalid credentials");
            req.getRequestDispatcher("/login.jsp").forward(req, resp);
        }
    }
    
    @Override
    public void destroy() {
        System.out.println("LoginServlet destroyed");
    }
}`,
            explanation: 'doGet() serves the form; doPost() processes it. Sessions store user state; sendRedirect() tells the browser to navigate to a new URL.',
          },
        ],
      },
    ],
  },

  network: {
    id: 'network',
    title: 'Network Programming',
    subtitle: 'Sockets, TCP/UDP & URL Connections',
    description: 'Java\'s java.net package provides high-level and low-level networking APIs for building client-server applications.',
    sections: [
      {
        id: 'sockets',
        title: 'TCP Socket Programming',
        content: 'TCP sockets provide reliable, ordered, bidirectional communication. ServerSocket listens; Socket connects.',
        codeExamples: [
          {
            title: 'Echo Server & Client',
            code: `// === SERVER ===
public class EchoServer {
    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(9090);
        System.out.println("Server listening on port 9090...");
        
        while (true) {
            Socket client = server.accept(); // blocks
            // Handle in new thread for concurrency
            new Thread(() -> {
                try (
                    BufferedReader in = new BufferedReader(
                        new InputStreamReader(client.getInputStream()));
                    PrintWriter out = new PrintWriter(
                        client.getOutputStream(), true)
                ) {
                    String line;
                    while ((line = in.readLine()) != null) {
                        System.out.println("Received: " + line);
                        out.println("Echo: " + line); // echo back
                    }
                } catch (IOException e) { e.printStackTrace(); }
            }).start();
        }
    }
}

// === CLIENT ===
public class EchoClient {
    public static void main(String[] args) throws Exception {
        Socket socket = new Socket("localhost", 9090);
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(
            new InputStreamReader(socket.getInputStream()));
        
        out.println("Hello Server!");
        System.out.println(in.readLine()); // Echo: Hello Server!
        
        socket.close();
    }
}`,
            explanation: 'Each client is handled in a new thread, allowing the server to accept more connections simultaneously.',
          },
        ],
        keyPoints: [
          'ServerSocket.accept() blocks until a client connects, returns a Socket',
          'Socket.getInputStream() / getOutputStream() for communication',
          'Close all streams and sockets in finally block or try-with-resources',
          'Use ExecutorService (thread pool) instead of new Thread() for production servers',
          'DatagramSocket/DatagramPacket for UDP (connectionless, no guarantee of delivery)',
        ],
      },
    ],
  },

  javafx: {
    id: 'javafx',
    title: 'GUI with JavaFX',
    subtitle: 'Scene Graph, Events & FXML',
    description: 'JavaFX is the modern Java GUI framework replacing Swing. It uses a scene graph architecture with CSS styling and FXML for UI declaration.',
    sections: [
      {
        id: 'architecture',
        title: 'JavaFX Architecture',
        content: 'JavaFX uses a hierarchical Scene Graph: Stage → Scene → Node tree.',
        codeExamples: [
          {
            title: 'Hello JavaFX',
            code: `import javafx.application.Application;
import javafx.scene.*;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import javafx.geometry.Insets;

public class HelloFX extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        // Create UI components
        Label label = new Label("Enter your name:");
        TextField textField = new TextField();
        Button button = new Button("Greet");
        Label result = new Label();
        
        // Event handler (lambda)
        button.setOnAction(e -> {
            result.setText("Hello, " + textField.getText() + "!");
        });
        
        // Layout (VBox = vertical stack)
        VBox root = new VBox(10, label, textField, button, result);
        root.setPadding(new Insets(20));
        
        // Scene & Stage
        Scene scene = new Scene(root, 300, 200);
        scene.getStylesheets().add("style.css"); // optional CSS
        
        primaryStage.setTitle("Hello JavaFX");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    public static void main(String[] args) {
        launch(args); // starts the JavaFX runtime
    }
}`,
            explanation: 'Every JavaFX app extends Application and overrides start(Stage). VBox lays out children vertically with spacing.',
          },
        ],
        keyPoints: [
          'Stage = Window, Scene = Content, Node = UI element',
          'Launch with Application.launch(args) in main()',
          'UI must be updated on the JavaFX Application Thread (Platform.runLater() for background threads)',
          'FXML separates UI declaration from logic (like XML/HTML for layout)',
          'JavaFX CSS uses -fx- prefix for properties',
        ],
      },
    ],
  },

  applets: {
    id: 'applets',
    title: 'Java Applets',
    subtitle: 'Lifecycle, Graphics & Security (Legacy)',
    description: 'Java Applets run inside browsers via a plugin. They are deprecated as of Java 9 and removed in Java 17, but remain relevant for exam coverage.',
    sections: [
      {
        id: 'lifecycle',
        title: 'Applet Lifecycle',
        content: 'The browser/viewer calls lifecycle methods in a specific order based on the applet\'s visibility state.',
        concepts: [
          { term: 'init()', definition: 'Called once when the applet is loaded. Initialize UI components and data here.' },
          { term: 'start()', definition: 'Called each time the applet becomes visible. Restart animations or threads here.' },
          { term: 'paint(Graphics g)', definition: 'Called when the applet needs to be drawn or redrawn. Use Graphics methods to draw.' },
          { term: 'stop()', definition: 'Called when the applet is hidden (user navigates away). Pause animations/threads.' },
          { term: 'destroy()', definition: 'Called before the applet is removed from memory. Final cleanup.' },
        ],
        codeExamples: [
          {
            title: 'Simple Applet',
            code: `import java.applet.Applet;
import java.awt.*;

public class HelloApplet extends Applet {
    private String message;
    private Color bgColor;
    
    @Override
    public void init() {
        // Read parameters from HTML <param> tags
        message = getParameter("message");
        if (message == null) message = "Hello, World!";
        bgColor = Color.CYAN;
        setBackground(bgColor);
    }
    
    @Override
    public void start() {
        System.out.println("Applet started");
    }
    
    @Override
    public void paint(Graphics g) {
        g.setColor(Color.RED);
        g.setFont(new Font("Arial", Font.BOLD, 24));
        g.drawString(message, 50, 60);
        
        g.setColor(Color.BLUE);
        g.drawRect(20, 80, 200, 50);
        g.fillOval(20, 150, 100, 100);
    }
    
    @Override
    public void stop() {
        System.out.println("Applet stopped");
    }
    
    @Override
    public void destroy() {
        System.out.println("Applet destroyed");
    }
}`,
            explanation: 'paint(Graphics g) is the drawing method. Use g.drawString, g.drawRect, g.fillOval etc. Call repaint() to trigger a redraw.',
          },
        ],
      },
    ],
  },

  ch6: {
    id: 'ch6',
    title: 'Java API & Packages',
    subtitle: 'Collections, Generics, Lambda & Streams',
    description: 'The Java standard library provides rich APIs. The Collections Framework and Stream API are essential for modern Java development.',
    sections: [
      {
        id: 'collections',
        title: 'Collections Framework',
        content: 'The Collections Framework provides interfaces and implementations for common data structures.',
        concepts: [
          { term: 'List (ArrayList)', definition: 'Ordered, allows duplicates. O(1) get/set, O(n) insert/delete. Best for random access.' },
          { term: 'LinkedList', definition: 'Doubly-linked list. O(1) insert/delete at ends, O(n) random access. Implements both List and Deque.' },
          { term: 'HashSet', definition: 'Unordered set, no duplicates. O(1) add/contains/remove average. Uses hashCode() and equals().' },
          { term: 'TreeSet', definition: 'Sorted set (natural or Comparator order). O(log n) operations. Elements must be Comparable.' },
          { term: 'HashMap', definition: 'Key-value pairs, unordered. O(1) average get/put. One null key allowed.' },
          { term: 'TreeMap', definition: 'Sorted key-value pairs. O(log n) operations. Keys must be Comparable.' },
        ],
        codeExamples: [
          {
            title: 'Collections & Generics',
            code: `// Generics - type-safe collections
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

// for-each (uses Iterator internally)
for (String name : names) {
    System.out.println(name);
}

// Map
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.getOrDefault("Carol", 0); // safe get

// Sorting with Comparator
names.sort(Comparator.naturalOrder());
names.sort(Comparator.comparingInt(String::length));

// Java 8 Streams
List<String> longNames = names.stream()
    .filter(n -> n.length() > 3)  // keep names > 3 chars
    .map(String::toUpperCase)       // transform
    .sorted()                        // sort
    .collect(Collectors.toList());  // collect to List`,
            explanation: 'Generics ensure type safety at compile time. Streams provide a declarative, functional approach to data transformation.',
          },
        ],
      },
    ],
  },

  ch2: {
    id: 'ch2',
    title: 'Java Basics',
    subtitle: 'Types, Identifiers, Access Modifiers & Memory',
    description: 'Java fundamentals including primitive types, access control, static members, and the Java Virtual Machine architecture.',
    sections: [
      {
        id: 'types',
        title: 'Primitive Types & Wrappers',
        content: 'Java has 8 primitive types. Each has a corresponding wrapper class in java.lang for use in collections and generics.',
        concepts: [
          { term: 'byte', definition: '8-bit signed integer (-128 to 127)' },
          { term: 'short', definition: '16-bit signed integer (-32,768 to 32,767)' },
          { term: 'int', definition: '32-bit signed integer (-2^31 to 2^31-1). Default for integer literals.' },
          { term: 'long', definition: '64-bit signed integer. Use L suffix: 100L' },
          { term: 'float', definition: '32-bit floating point. Use f suffix: 3.14f' },
          { term: 'double', definition: '64-bit floating point. Default for decimal literals.' },
          { term: 'boolean', definition: 'true or false only' },
          { term: 'char', definition: '16-bit Unicode character. e.g.: \'A\'' },
        ],
        keyPoints: [
          'Primitives are stored on the stack; objects are on the heap',
          'Autoboxing/unboxing converts between primitives and wrappers automatically',
          'String is NOT a primitive — it\'s an immutable class',
          'Integer.parseInt(), Double.parseDouble() convert Strings to primitives',
        ],
      },
      {
        id: 'access',
        title: 'Access Modifiers',
        content: 'Access modifiers control visibility of classes, fields, and methods.',
        concepts: [
          { term: 'public', definition: 'Accessible from anywhere' },
          { term: 'protected', definition: 'Accessible within same package and subclasses (even in different packages)' },
          { term: 'package-private (default)', definition: 'Accessible only within the same package (no keyword)' },
          { term: 'private', definition: 'Accessible only within the same class' },
        ],
        codeExamples: [
          {
            title: 'Access Modifiers',
            code: `public class Person {
    private String ssn;         // only this class
    protected String name;      // this class + subclasses + package
    int age;                    // package-private (default)
    public String email;        // anyone
    
    public String getSSN() {    // public getter for private field
        return ssn;
    }
}`,
            explanation: 'Use private for data fields and public getters/setters (JavaBeans pattern). This is encapsulation in practice.',
          },
        ],
      },
    ],
  },
}
