export type QuestionDifficulty = "easy" | "medium" | "hard";

export interface Question {
  id: number;
  chapter: string;
  topic: string;
  difficulty: QuestionDifficulty;
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
  code?: string;
}

export const ALL_QUESTIONS: Question[] = [
  // chapter 1 OOP Fundamentals
  {
    id: 1,
    chapter: "ch1",
    topic: "OOP Concepts",
    difficulty: "easy",
    question:
      "Which of the following is NOT one of the four main principles of Object-Oriented Programming?",
    options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    answer: 2,
    explanation:
      "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction. Compilation is a process, not an OOP principle.",
  },
  {
    id: 2,
    chapter: "ch1",
    topic: "Encapsulation",
    difficulty: "easy",
    question: "Encapsulation is best described as:",
    options: [
      "The ability of one class to inherit from another",
      "Bundling data and methods that operate on data into a single unit",
      "The ability to take many forms",
      "Hiding the implementation details from the user",
    ],
    answer: 1,
    explanation:
      "Encapsulation bundles data (fields) and methods (behaviors) into a class, restricting direct access to internal state via access modifiers.",
  },
  {
    id: 3,
    chapter: "ch1",
    topic: "Abstraction",
    difficulty: "medium",
    question: "Which keyword is used to define an abstract class in Java?",
    options: ["interface", "abstract", "virtual", "override"],
    answer: 1,
    explanation:
      "The `abstract` keyword is used in Java to declare an abstract class that cannot be instantiated and may contain abstract methods.",
  },
  {
    id: 4,
    chapter: "ch1",
    topic: "Classes & Objects",
    difficulty: "easy",
    question: "What is an object in Java?",
    options: [
      "A template/blueprint for creating instances",
      "An instance of a class with state and behavior",
      "A static method collection",
      "A primitive data type",
    ],
    answer: 1,
    explanation:
      "An object is a runtime instance of a class that has state (fields) and behavior (methods).",
  },
  {
    id: 5,
    chapter: "ch1",
    topic: "OOP vs Procedural",
    difficulty: "medium",
    question:
      "What is the primary advantage of OOP over procedural programming?",
    options: [
      "OOP programs execute faster",
      "OOP uses less memory",
      "OOP provides better code reusability and maintainability through modular design",
      "OOP is only suitable for small programs",
    ],
    answer: 2,
    explanation:
      "OOP promotes reusability via inheritance, encapsulation for maintainability, and polymorphism for flexible design — key advantages over procedural approaches.",
  },

  // chapter 2 Java Basics
  {
    id: 6,
    chapter: "ch2",
    topic: "Java Basics",
    difficulty: "easy",
    question: "Which of the following is a valid Java identifier?",
    options: ["2variable", "_myVar", "class", "public"],
    answer: 1,
    explanation:
      "Java identifiers can start with a letter, underscore (_), or dollar sign ($). They cannot start with a digit or be reserved keywords.",
  },
  {
    id: 7,
    chapter: "ch2",
    topic: "Data Types",
    difficulty: "easy",
    question: "What is the default value of an int field in a Java class?",
    options: ["null", "1", "0", "undefined"],
    answer: 2,
    explanation:
      "In Java, integer fields (int, long, short, byte) are initialized to 0 by default when declared as instance or class fields.",
  },
  {
    id: 8,
    chapter: "ch2",
    topic: "Access Modifiers",
    difficulty: "medium",
    question:
      "Which access modifier makes a member accessible only within the same class?",
    options: ["public", "protected", "private", "default (package-private)"],
    answer: 2,
    explanation:
      "`private` restricts access to only the declaring class. `protected` allows subclasses and package access. `public` allows any access.",
  },
  {
    id: 9,
    chapter: "ch2",
    topic: "Static Members",
    difficulty: "medium",
    question: "What is true about a static method in Java?",
    options: [
      "It can access instance variables directly",
      "It belongs to the class, not to any object instance",
      "It must be overridden by subclasses",
      "It can only be called once",
    ],
    answer: 1,
    explanation:
      "Static methods belong to the class itself. They cannot access non-static (instance) members directly and are called on the class, not an object.",
  },
  {
    id: 10,
    chapter: "ch2",
    topic: "Java Basics",
    difficulty: "hard",
    question:
      'What will this code output?\n\nint x = 5;\nSystem.out.println(x++ + " " + ++x);',
    options: ["5 7", "6 7", "5 6", "6 6"],
    answer: 0,
    explanation:
      'x++ uses x (5) then increments to 6. ++x increments first (6→7) then uses 7. Output: "5 7".',
    code: 'int x = 5;\nSystem.out.println(x++ + " " + ++x);',
  },

  // chapter 3 Classes and Objects
  {
    id: 11,
    chapter: "ch3",
    topic: "Constructors",
    difficulty: "easy",
    question: "Which statement about Java constructors is correct?",
    options: [
      "A constructor must have a return type of void",
      "A constructor has the same name as the class and no return type",
      "A class can only have one constructor",
      "Constructors are inherited by subclasses",
    ],
    answer: 1,
    explanation:
      "Constructors have the same name as the class and no return type (not even void). A class can have multiple constructors (overloading). Constructors are not inherited.",
  },
  {
    id: 12,
    chapter: "ch3",
    topic: "this keyword",
    difficulty: "medium",
    question: "What is the purpose of the `this` keyword in Java?",
    options: [
      "To call the parent class constructor",
      "To reference the current object instance",
      "To create a static reference",
      "To import a class",
    ],
    answer: 1,
    explanation:
      "`this` refers to the current object instance, used to distinguish instance variables from parameters and to call other constructors of the same class.",
  },
  {
    id: 13,
    chapter: "ch3",
    topic: "Object Creation",
    difficulty: "easy",
    question:
      "How do you create an object of class `Car` with a constructor taking a String?",
    options: [
      'Car c = Car("Toyota");',
      'Car c = new Car("Toyota");',
      'new Car c = ("Toyota");',
      'Car.new("Toyota");',
    ],
    answer: 1,
    explanation:
      "The `new` keyword allocates memory for the object and calls the constructor. Syntax: `ClassName varName = new ClassName(args);`",
    code: 'Car c = new Car("Toyota");',
  },
  {
    id: 14,
    chapter: "ch3",
    topic: "Garbage Collection",
    difficulty: "medium",
    question:
      "When does the Java Garbage Collector reclaim an object's memory?",
    options: [
      "Immediately when it goes out of scope",
      "When the programmer calls delete()",
      "When there are no more references to the object",
      "After every method call",
    ],
    answer: 2,
    explanation:
      "Java's GC automatically reclaims memory when an object has no live references. There is no manual delete() in Java; GC runs at the JVM's discretion.",
  },
  {
    id: 15,
    chapter: "ch3",
    topic: "Method Overloading",
    difficulty: "medium",
    question: "Method overloading in Java is determined by:",
    options: [
      "The return type alone",
      "The method name alone",
      "The number and/or types of parameters",
      "The access modifier",
    ],
    answer: 2,
    explanation:
      "Overloaded methods share the same name but differ in the number, types, or order of their parameters. Return type alone cannot distinguish overloaded methods.",
  },

  // chapter 4 Inheritance
  {
    id: 16,
    chapter: "ch4",
    topic: "Inheritance Basics",
    difficulty: "easy",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    answer: 1,
    explanation:
      "`extends` is used for class inheritance in Java. `implements` is used for interfaces. A class can extend only one class (single inheritance).",
  },
  {
    id: 17,
    chapter: "ch4",
    topic: "super keyword",
    difficulty: "medium",
    question: "What does `super()` do when called in a constructor?",
    options: [
      "Creates a new superclass object",
      "Calls the parent class's constructor",
      "Overrides the parent method",
      "Copies all parent fields",
    ],
    answer: 1,
    explanation:
      "`super()` calls the parent class constructor. It must be the first statement in a subclass constructor. If omitted, Java auto-inserts `super()` (no-arg).",
  },
  {
    id: 18,
    chapter: "ch4",
    topic: "Method Overriding",
    difficulty: "medium",
    question: "For method overriding to occur, which condition must be true?",
    options: [
      "The method must be static",
      "The subclass method must have the same name, return type, and parameters as the parent method",
      "The method must be private",
      "The subclass must be in the same package",
    ],
    answer: 1,
    explanation:
      "Overriding requires the same method signature (name + parameters) and compatible return type. The @Override annotation helps verify this at compile time.",
  },
  {
    id: 19,
    chapter: "ch4",
    topic: "final keyword",
    difficulty: "medium",
    question: "Which statement about the `final` keyword is correct?",
    options: [
      "A final method can be overridden",
      "A final class can be subclassed",
      "A final variable can be reassigned",
      "A final method cannot be overridden by subclasses",
    ],
    answer: 3,
    explanation:
      "`final` on a method prevents overriding. `final` on a class prevents subclassing. `final` on a variable makes it a constant (cannot be reassigned after initialization).",
  },
  {
    id: 20,
    chapter: "ch4",
    topic: "Inheritance Chain",
    difficulty: "hard",
    question:
      'What is output of the following code?\n\nclass A { void show() { System.out.print("A"); } }\nclass B extends A { void show() { super.show(); System.out.print("B"); } }\nnew B().show();',
    options: ["A", "B", "AB", "BA"],
    answer: 2,
    explanation:
      'B.show() calls super.show() which prints "A", then prints "B". Result: "AB".',
    code: 'class A { void show() { System.out.print("A"); } }\nclass B extends A { void show() { super.show(); System.out.print("B"); } }\nnew B().show();',
  },

  // chapter 5 Polymorphism
  {
    id: 21,
    chapter: "ch5",
    topic: "Polymorphism",
    difficulty: "easy",
    question: "What is runtime polymorphism in Java?",
    options: [
      "Method overloading resolved at compile time",
      "Method overriding resolved at runtime via dynamic dispatch",
      "Casting objects at runtime",
      "Using generics",
    ],
    answer: 1,
    explanation:
      "Runtime polymorphism (dynamic method dispatch) occurs when a supertype reference calls an overridden method — the actual subtype's version executes at runtime.",
  },
  {
    id: 22,
    chapter: "ch5",
    topic: "Interfaces",
    difficulty: "medium",
    question: "Which statement about Java interfaces is correct?",
    options: [
      "Interfaces can be instantiated directly",
      "A class can implement only one interface",
      "Interface methods are public and abstract by default (pre-Java 8)",
      "Interfaces can have instance fields",
    ],
    answer: 2,
    explanation:
      "Pre-Java 8, interface methods were implicitly public and abstract. Java 8+ allows default and static methods. Interfaces cannot be instantiated or have instance fields.",
  },
  {
    id: 23,
    chapter: "ch5",
    topic: "Abstract Classes",
    difficulty: "medium",
    question:
      "What is the key difference between an abstract class and an interface?",
    options: [
      "Abstract classes can have constructors; interfaces cannot",
      "Interfaces support multiple implementation; abstract classes do not",
      "Both A and B are correct",
      "There is no difference in modern Java",
    ],
    answer: 2,
    explanation:
      "Both are correct: abstract classes can have constructors, state, and concrete methods. A class can implement multiple interfaces but extend only one abstract class.",
  },
  {
    id: 24,
    chapter: "ch5",
    topic: "Casting",
    difficulty: "hard",
    question:
      "What exception is thrown when an invalid downcast is attempted at runtime?",
    options: [
      "ClassCastException",
      "NullPointerException",
      "IllegalArgumentException",
      "CastException",
    ],
    answer: 0,
    explanation:
      "`ClassCastException` is thrown when an object is cast to an incompatible type. Use `instanceof` to check before casting to avoid this.",
  },
  {
    id: 25,
    chapter: "ch5",
    topic: "instanceof",
    difficulty: "medium",
    question: "What does the `instanceof` operator do?",
    options: [
      "Creates a new instance of a class",
      "Checks if an object is an instance of a class or interface at runtime",
      "Returns the class of an object",
      "Converts an object to a string",
    ],
    answer: 1,
    explanation:
      "`instanceof` returns `true` if the object is an instance of the specified class/interface (or a subtype). It is null-safe — `null instanceof X` returns false.",
  },

  // chapter 6 Java API and Packages
  {
    id: 26,
    chapter: "ch6",
    topic: "Java Collections",
    difficulty: "medium",
    question:
      "Which collection maintains insertion order and allows duplicate elements?",
    options: ["HashSet", "TreeSet", "ArrayList", "HashMap"],
    answer: 2,
    explanation:
      "ArrayList maintains insertion order, allows duplicates, and provides O(1) index access. HashSet/TreeSet are sets (no duplicates). HashMap is a key-value map.",
  },
  {
    id: 27,
    chapter: "ch6",
    topic: "String API",
    difficulty: "easy",
    question: 'What does `"Hello".substring(1, 3)` return?',
    options: ["Hel", "el", "ell", "Hell"],
    answer: 1,
    explanation:
      '`substring(beginIndex, endIndex)` returns chars from beginIndex (inclusive) to endIndex (exclusive). Indices 1 and 2 give "el".',
    code: '"Hello".substring(1, 3) // returns "el"',
  },
  {
    id: 28,
    chapter: "ch6",
    topic: "Iterator Pattern",
    difficulty: "medium",
    question:
      "What is the purpose of the Iterator pattern in Java collections?",
    options: [
      "To sort elements in a collection",
      "To provide a standard way to traverse a collection without exposing its implementation",
      "To filter elements in a collection",
      "To convert a collection to an array",
    ],
    answer: 1,
    explanation:
      "Iterator provides `hasNext()` and `next()` methods to traverse any collection uniformly, regardless of underlying data structure.",
  },
  {
    id: 29,
    chapter: "ch6",
    topic: "Generics",
    difficulty: "hard",
    question: "What is type erasure in Java generics?",
    options: [
      "The compiler removes all comments from generic code",
      "Generic type information is erased at compile time, replaced with Object or bound types",
      "Generic methods cannot have return types",
      "Type parameters are only available at runtime",
    ],
    answer: 1,
    explanation:
      "Java generics use type erasure: compile-time type checking is done, then type parameters are replaced with their bounds (or Object) in bytecode. No generic type info exists at runtime.",
  },
  {
    id: 30,
    chapter: "ch6",
    topic: "Lambda & Streams",
    difficulty: "hard",
    question:
      "Which of the following correctly filters a list of integers keeping only values > 5?",
    options: [
      "list.filter(x -> x > 5)",
      "list.stream().filter(x -> x > 5).collect(Collectors.toList())",
      "list.stream().where(x -> x > 5)",
      "Stream.of(list).select(x -> x > 5)",
    ],
    answer: 1,
    explanation:
      "The Stream API uses `.stream().filter(predicate).collect(Collectors.toList())` pattern. `.filter()` is a Stream operation; List doesn't have a direct `.filter()` method.",
    code: "list.stream().filter(x -> x > 5).collect(Collectors.toList())",
  },

  {
    id: 31,
    chapter: "ch7",
    topic: "Try-Catch",
    difficulty: "easy",
    question:
      "Which block in exception handling always executes regardless of whether an exception occurred?",
    options: ["try", "catch", "finally", "throws"],
    answer: 2,
    explanation:
      "The `finally` block always executes after try and catch, whether or not an exception was thrown. It's used for cleanup (closing resources).",
  },
  {
    id: 32,
    chapter: "ch7",
    topic: "Checked vs Unchecked",
    difficulty: "medium",
    question: "Which exception is a checked exception?",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IOException",
      "ArithmeticException",
    ],
    answer: 2,
    explanation:
      "`IOException` is a checked exception — the compiler requires it to be caught or declared with `throws`. The others extend RuntimeException and are unchecked.",
  },
  {
    id: 33,
    chapter: "ch7",
    topic: "Custom Exceptions",
    difficulty: "medium",
    question: "To create a custom checked exception, your class should extend:",
    options: ["RuntimeException", "Error", "Exception", "Throwable"],
    answer: 2,
    explanation:
      "Extending `Exception` (but not RuntimeException) creates a checked exception. Extending `RuntimeException` creates an unchecked exception.",
    code: "class MyException extends Exception {\n  public MyException(String msg) { super(msg); }\n}",
  },
  {
    id: 34,
    chapter: "ch7",
    topic: "Multi-catch",
    difficulty: "hard",
    question:
      "Which syntax is correct for catching multiple exceptions in a single catch block (Java 7+)?",
    options: [
      "catch (IOException, SQLException e)",
      "catch (IOException | SQLException e)",
      "catch (IOException & SQLException e)",
      "catch (IOException || SQLException e)",
    ],
    answer: 1,
    explanation:
      "Java 7+ multi-catch uses the pipe `|` operator: `catch (ExceptionType1 | ExceptionType2 e)`. The variable is implicitly final.",
    code: "try { ... }\ncatch (IOException | SQLException e) {\n  e.printStackTrace();\n}",
  },
  {
    id: 35,
    chapter: "ch7",
    topic: "try-with-resources",
    difficulty: "medium",
    question:
      "What interface must a class implement to be used in a try-with-resources statement?",
    options: ["Closeable", "AutoCloseable", "Disposable", "Finalizable"],
    answer: 1,
    explanation:
      "`AutoCloseable` (introduced in Java 7) allows objects to be used in try-with-resources. Its `close()` method is called automatically at block exit. `Closeable` extends `AutoCloseable`.",
    code: "try (Connection conn = DriverManager.getConnection(url)) {\n  // conn.close() is called automatically\n}",
  },

  {
    id: 36,
    chapter: "jdbc",
    topic: "JDBC Basics",
    difficulty: "easy",
    question: "What does JDBC stand for?",
    options: [
      "Java Dynamic Base Connection",
      "Java Database Connectivity",
      "Java Desktop Background Controller",
      "Java Distributed Bus Communication",
    ],
    answer: 1,
    explanation:
      "JDBC stands for Java Database Connectivity. It's a Java API that provides a standard way to connect to relational databases.",
  },
  {
    id: 37,
    chapter: "jdbc",
    topic: "JDBC Architecture",
    difficulty: "medium",
    question: "What is the first step when establishing a JDBC connection?",
    options: [
      "Execute a SQL statement",
      "Create a Statement object",
      "Load the JDBC driver",
      "Open the ResultSet",
    ],
    answer: 2,
    explanation:
      "The JDBC workflow is: (1) Load driver with Class.forName(), (2) Establish connection via DriverManager.getConnection(), (3) Create Statement, (4) Execute SQL, (5) Process ResultSet.",
    code: 'Class.forName("com.mysql.jdbc.Driver");\nConnection conn = DriverManager.getConnection("jdbc:mysql://localhost/db");',
  },
  {
    id: 38,
    chapter: "jdbc",
    topic: "PreparedStatement",
    difficulty: "medium",
    question:
      "What is the primary advantage of PreparedStatement over Statement?",
    options: [
      "PreparedStatement can only execute SELECT statements",
      "PreparedStatement is precompiled and prevents SQL injection",
      "PreparedStatement is faster for single-use queries",
      "PreparedStatement automatically closes connections",
    ],
    answer: 1,
    explanation:
      "PreparedStatement precompiles the SQL query and uses parameterized inputs (`?` placeholders), preventing SQL injection attacks. It's also more efficient for repeated queries.",
    code: 'PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE id = ?");\nps.setInt(1, userId);',
  },
  {
    id: 39,
    chapter: "jdbc",
    topic: "ResultSet",
    difficulty: "medium",
    question: "How do you iterate through a ResultSet in JDBC?",
    options: [
      "for (Row row : resultSet)",
      "while (resultSet.next())",
      "resultSet.forEach()",
      "Iterator it = resultSet.iterator()",
    ],
    answer: 1,
    explanation:
      "`ResultSet.next()` moves the cursor to the next row, returning `true` if there is one. Initial position is before the first row. Use `getString()`, `getInt()` etc. to retrieve values.",
    code: 'while (resultSet.next()) {\n  String name = resultSet.getString("name");\n  int age = resultSet.getInt("age");\n}',
  },
  {
    id: 40,
    chapter: "jdbc",
    topic: "SQL Statements",
    difficulty: "easy",
    question: "Which JDBC method is used to execute a SELECT statement?",
    options: [
      "executeUpdate()",
      "execute()",
      "executeQuery()",
      "executeSelect()",
    ],
    answer: 2,
    explanation:
      "`executeQuery()` returns a ResultSet for SELECT statements. `executeUpdate()` is for INSERT, UPDATE, DELETE, and DDL. `execute()` can handle both but returns a boolean.",
  },
  {
    id: 41,
    chapter: "jdbc",
    topic: "SQL DML",
    difficulty: "easy",
    question: "Which SQL statement is used to add new rows to a table?",
    options: ["ADD", "APPEND", "INSERT INTO", "CREATE"],
    answer: 2,
    explanation:
      "`INSERT INTO tableName (col1, col2) VALUES (val1, val2)` adds new rows. CREATE is for DDL (creating tables). ADD is a DDL clause (ALTER TABLE ADD column).",
  },
  {
    id: 42,
    chapter: "jdbc",
    topic: "DatabaseMetaData",
    difficulty: "hard",
    question: "How do you obtain DatabaseMetaData in JDBC?",
    options: [
      "new DatabaseMetaData(connection)",
      "connection.getMetaData()",
      "DriverManager.getMetaData()",
      "statement.getMetaData()",
    ],
    answer: 1,
    explanation:
      "`connection.getMetaData()` returns a `DatabaseMetaData` object with information about the database product, driver, tables, capabilities, etc.",
    code: "DatabaseMetaData meta = connection.getMetaData();\nSystem.out.println(meta.getDatabaseProductName());",
  },

  {
    id: 43,
    chapter: "javafx",
    topic: "JavaFX Basics",
    difficulty: "easy",
    question: "What class must a JavaFX application extend?",
    options: ["JFrame", "Application", "Applet", "JPanel"],
    answer: 1,
    explanation:
      "Every JavaFX application must extend `javafx.application.Application` and override the `start(Stage primaryStage)` method.",
    code: "public class MyApp extends Application {\n  @Override\n  public void start(Stage stage) { ... }\n}",
  },
  {
    id: 44,
    chapter: "javafx",
    topic: "Scene Graph",
    difficulty: "medium",
    question: "In JavaFX, what is the correct hierarchy?",
    options: [
      "Scene → Stage → Node",
      "Stage → Scene → Node",
      "Node → Scene → Stage",
      "Stage → Node → Scene",
    ],
    answer: 1,
    explanation:
      "JavaFX hierarchy: Stage (window) contains a Scene (content area), which contains a tree of Nodes (UI elements). A Stage can switch between Scenes.",
  },
  {
    id: 45,
    chapter: "javafx",
    topic: "Event Handling",
    difficulty: "medium",
    question:
      "Which interface is typically used to handle button click events in JavaFX?",
    options: [
      "ActionListener",
      "EventHandler<ActionEvent>",
      "ClickListener",
      "MouseHandler",
    ],
    answer: 1,
    explanation:
      "JavaFX uses `EventHandler<ActionEvent>` for button clicks. It's a functional interface, so lambda expressions work perfectly: `btn.setOnAction(e -> { ... });`",
    code: 'button.setOnAction((ActionEvent e) -> {\n  label.setText("Clicked!");\n});',
  },
  {
    id: 46,
    chapter: "javafx",
    topic: "Layout Panes",
    difficulty: "easy",
    question:
      "Which JavaFX layout pane arranges children in a single vertical or horizontal line?",
    options: ["GridPane", "BorderPane", "HBox / VBox", "StackPane"],
    answer: 2,
    explanation:
      "HBox arranges children horizontally; VBox arranges them vertically. GridPane uses a grid layout. BorderPane has 5 regions (top, bottom, left, right, center).",
  },
  {
    id: 47,
    chapter: "javafx",
    topic: "FXML",
    difficulty: "hard",
    question:
      "What annotation links an FXML-defined control to a controller field?",
    options: ["@FXML", "@Inject", "@Resource", "@Autowired"],
    answer: 0,
    explanation:
      "`@FXML` annotation injects FXML-defined nodes into a controller class field. The controller is set via `FXMLLoader` and the fx:controller attribute in FXML.",
    code: "@FXML private Button myButton;\n@FXML private Label myLabel;",
  },

  {
    id: 48,
    chapter: "network",
    topic: "Sockets",
    difficulty: "medium",
    question:
      "In Java socket programming, which class is used to create a server that listens for connections?",
    options: ["Socket", "ServerSocket", "DatagramSocket", "URLConnection"],
    answer: 1,
    explanation:
      "`ServerSocket` binds to a port and listens for incoming TCP connections via `accept()`. `Socket` is the client-side class for establishing a connection.",
    code: "ServerSocket server = new ServerSocket(8080);\nSocket client = server.accept(); // blocks until connection",
  },
  {
    id: 49,
    chapter: "network",
    topic: "TCP vs UDP",
    difficulty: "medium",
    question:
      "Which statement correctly describes TCP vs UDP in Java networking?",
    options: [
      "TCP uses DatagramSocket; UDP uses Socket",
      "TCP provides reliable, ordered delivery; UDP is faster but connectionless and unreliable",
      "Both TCP and UDP guarantee message delivery",
      "UDP is always preferred for file transfers",
    ],
    answer: 1,
    explanation:
      "TCP (Socket/ServerSocket) provides ordered, reliable delivery with connection establishment. UDP (DatagramSocket/DatagramPacket) is connectionless, faster, but does not guarantee delivery or order.",
  },
  {
    id: 50,
    chapter: "network",
    topic: "URL & URLConnection",
    difficulty: "easy",
    question: "Which Java class is used to represent a URL?",
    options: ["URI", "URL", "Link", "WebAddress"],
    answer: 1,
    explanation:
      "The `java.net.URL` class represents a Uniform Resource Locator. Use `URL.openConnection()` to get a `URLConnection` for reading/writing over the network.",
  },
  {
    id: 51,
    chapter: "network",
    topic: "InetAddress",
    difficulty: "medium",
    question: 'What does `InetAddress.getByName("www.google.com")` do?',
    options: [
      "Creates a socket connection to google.com",
      "Resolves the hostname to an IP address via DNS",
      "Downloads the homepage of google.com",
      "Pings google.com",
    ],
    answer: 1,
    explanation:
      "`InetAddress.getByName()` performs a DNS lookup to resolve a hostname to an IP address. It returns an `InetAddress` object encapsulating both hostname and IP.",
  },
  {
    id: 52,
    chapter: "network",
    topic: "Client-Server",
    difficulty: "hard",
    question:
      "In a multithreaded server, what is the best practice when accepting multiple clients?",
    options: [
      "Handle each client sequentially in the main thread",
      "Spawn a new Thread (or use a thread pool) for each accepted client connection",
      "Use DatagramSocket for all multi-client servers",
      "Close and reopen ServerSocket for each client",
    ],
    answer: 1,
    explanation:
      "For concurrency, each accepted Socket should be handed to a new Thread (or ExecutorService thread pool) to allow the main thread to keep accepting new connections.",
    code: "while (true) {\n  Socket client = server.accept();\n  new Thread(() -> handleClient(client)).start();\n}",
  },

  {
    id: 53,
    chapter: "applets",
    topic: "Applet Lifecycle",
    difficulty: "medium",
    question: "What is the correct order of Java Applet lifecycle methods?",
    options: [
      "start() → init() → stop() → destroy()",
      "init() → start() → stop() → destroy()",
      "init() → paint() → start() → stop()",
      "start() → paint() → stop() → init()",
    ],
    answer: 1,
    explanation:
      "Applet lifecycle: `init()` (one-time init) → `start()` (called when visible) → [running] → `stop()` (when hidden) → `destroy()` (cleanup). `paint()` is called on repaint.",
  },
  {
    id: 54,
    chapter: "applets",
    topic: "Applet Basics",
    difficulty: "easy",
    question: "Which class must a Java Applet extend?",
    options: ["JFrame", "JPanel", "java.applet.Applet", "Application"],
    answer: 2,
    explanation:
      "Java Applets extend `java.applet.Applet` (AWT) or `javax.swing.JApplet` (Swing). Note: Applets are deprecated in modern Java (removed in Java 17).",
  },
  {
    id: 55,
    chapter: "applets",
    topic: "Applet Graphics",
    difficulty: "medium",
    question: "In which method do you draw graphics in a Java Applet?",
    options: ["init()", "start()", "paint(Graphics g)", "run()"],
    answer: 2,
    explanation:
      "`paint(Graphics g)` is called whenever the applet needs to be redrawn. Use `g.drawString()`, `g.drawRect()`, `g.fillOval()` etc. Call `repaint()` to trigger a redraw.",
    code: '@Override\npublic void paint(Graphics g) {\n  g.drawString("Hello World", 50, 50);\n  g.drawRect(10, 10, 100, 50);\n}',
  },
  {
    id: 56,
    chapter: "servlets",
    topic: "Servlet Basics",
    difficulty: "easy",
    question: "Which class must a Java Servlet extend to handle HTTP requests?",
    options: ["Servlet", "GenericServlet", "HttpServlet", "WebServlet"],
    answer: 2,
    explanation:
      "`HttpServlet` is the standard base class for HTTP servlets. Override `doGet()`, `doPost()` etc. It extends `GenericServlet` which implements the `Servlet` interface.",
  },
  {
    id: 57,
    chapter: "servlets",
    topic: "Servlet Lifecycle",
    difficulty: "medium",
    question: "What is the correct servlet lifecycle order?",
    options: [
      "service() → init() → destroy()",
      "init() → service() → destroy()",
      "destroy() → init() → service()",
      "load() → init() → run() → destroy()",
    ],
    answer: 1,
    explanation:
      "Servlet lifecycle: `init()` (once on load) → `service()` (for each request, dispatches to doGet/doPost) → `destroy()` (once on unload).",
  },
  {
    id: 58,
    chapter: "servlets",
    topic: "HTTP Methods",
    difficulty: "easy",
    question: "Which HttpServlet method handles HTTP GET requests?",
    options: ["doRequest()", "handleGet()", "doGet()", "processGet()"],
    answer: 2,
    explanation:
      "`doGet(HttpServletRequest req, HttpServletResponse resp)` handles GET requests. `doPost()` handles POST. The `service()` method dispatches to the appropriate do*() method.",
    code: '@Override\nprotected void doGet(HttpServletRequest req, HttpServletResponse resp)\n    throws ServletException, IOException {\n  resp.getWriter().println("<h1>Hello</h1>");\n}',
  },
  {
    id: 59,
    chapter: "servlets",
    topic: "Sessions & Cookies",
    difficulty: "medium",
    question: "How do you obtain the current HTTP session in a servlet?",
    options: [
      "new HttpSession(request)",
      "request.getSession()",
      "response.getSession()",
      "SessionManager.getSession()",
    ],
    answer: 1,
    explanation:
      "`request.getSession()` returns the current session or creates a new one. `request.getSession(false)` returns null if no session exists.",
    code: 'HttpSession session = request.getSession();\nsession.setAttribute("user", username);',
  },
  {
    id: 60,
    chapter: "servlets",
    topic: "Servlet Context",
    difficulty: "hard",
    question: "What is the scope of a `ServletContext` object?",
    options: [
      "Per request",
      "Per session",
      "Per servlet instance",
      "Per web application (shared by all servlets)",
    ],
    answer: 3,
    explanation:
      "`ServletContext` is shared across the entire web application — all servlets in the same app share the same context. Use it for application-wide shared data and resources.",
  },

  {
    id: 61,
    chapter: "ch7",
    topic: "Exception Propagation",
    difficulty: "hard",
    question:
      "What happens if a checked exception is neither caught nor declared in the method signature?",
    options: [
      "The exception is silently ignored",
      "The program crashes at runtime",
      "A compile-time error occurs",
      "The exception is converted to an unchecked exception",
    ],
    answer: 2,
    explanation:
      "Checked exceptions must be either caught in a try-catch block or declared with `throws` in the method signature. Failing to do so causes a compile-time error.",
  },
  {
    id: 62,
    chapter: "ch4",
    topic: "Abstract Classes",
    difficulty: "medium",
    question: "Can an abstract class have a constructor in Java?",
    options: [
      "No, abstract classes cannot have constructors",
      "Yes, but it can only be called via super() in subclass constructors",
      "Yes, and it can be instantiated directly",
      "Only if all methods are abstract",
    ],
    answer: 1,
    explanation:
      "Abstract classes can have constructors, called via `super()` from a concrete subclass. They cannot be instantiated directly even with a constructor.",
  },
  {
    id: 63,
    chapter: "ch5",
    topic: "Interfaces",
    difficulty: "medium",
    question:
      "What Java 8 feature allows interfaces to have method implementations?",
    options: [
      "Static methods only",
      "Default methods",
      "Abstract methods",
      "Final methods",
    ],
    answer: 1,
    explanation:
      "Java 8 introduced `default` methods — interface methods with implementations. Classes implementing the interface inherit the default method unless they override it.",
    code: 'interface Drawable {\n  default void draw() {\n    System.out.println("Drawing...");\n  }\n}',
  },
  {
    id: 64,
    chapter: "ch6",
    topic: "HashMap",
    difficulty: "medium",
    question:
      "What is the time complexity of get() and put() operations in a HashMap (average case)?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 2,
    explanation:
      "HashMap provides O(1) average case for get() and put() using hash-based indexing. Worst case is O(n) if many collisions occur (degenerate to LinkedList).",
  },
  {
    id: 65,
    chapter: "ch3",
    topic: "equals & hashCode",
    difficulty: "hard",
    question:
      "If you override `equals()` in Java, what else must you override?",
    options: ["toString()", "hashCode()", "compareTo()", "clone()"],
    answer: 1,
    explanation:
      "Java contract: if two objects are equal via equals(), they must have the same hashCode(). Violating this breaks HashMap, HashSet, and other hash-based collections.",
  },
  {
    id: 66,
    chapter: "ch2",
    topic: "Java Memory",
    difficulty: "medium",
    question: "Where are local variables stored in Java memory?",
    options: ["Heap", "Stack", "Method Area", "Native Stack"],
    answer: 1,
    explanation:
      "Local variables and method call frames are stored on the Stack. Objects are allocated on the Heap. Class metadata goes in the Method Area (Metaspace in Java 8+).",
  },
  {
    id: 67,
    chapter: "ch1",
    topic: "Cohesion & Coupling",
    difficulty: "medium",
    question:
      "In OOP design, what is the recommended relationship between cohesion and coupling?",
    options: [
      "High coupling, low cohesion",
      "Low coupling, low cohesion",
      "High coupling, high cohesion",
      "High cohesion, low coupling",
    ],
    answer: 3,
    explanation:
      "Good design aims for high cohesion (each class/module does one thing well) and low coupling (minimal dependencies between modules). This maximizes reusability and maintainability.",
  },
  {
    id: 68,
    chapter: "jdbc",
    topic: "JDBC Transactions",
    difficulty: "hard",
    question: "How do you manage transactions in JDBC?",
    options: [
      "Transactions are automatic and cannot be controlled",
      "Use connection.setAutoCommit(false), then commit() or rollback()",
      "Use TransactionManager.begin() and TransactionManager.commit()",
      "Wrap SQL in BEGIN/END blocks",
    ],
    answer: 1,
    explanation:
      "Set `connection.setAutoCommit(false)` to start a manual transaction. Call `connection.commit()` to persist or `connection.rollback()` to undo on error.",
    code: "connection.setAutoCommit(false);\ntry {\n  stmt.executeUpdate(sql1);\n  stmt.executeUpdate(sql2);\n  connection.commit();\n} catch (SQLException e) {\n  connection.rollback();\n}",
  },
  {
    id: 69,
    chapter: "network",
    topic: "Streams in Networking",
    difficulty: "medium",
    question:
      "Which streams are commonly used to send/receive text data over a socket?",
    options: [
      "FileInputStream / FileOutputStream",
      "PrintWriter / BufferedReader",
      "ObjectOutputStream / ObjectInputStream",
      "DataOutputStream / DataInputStream",
    ],
    answer: 1,
    explanation:
      "For text communication: wrap socket streams with `PrintWriter` (for writing) and `BufferedReader` (for reading line by line). Use Object streams for serialized Java objects.",
    code: "PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\nBufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));",
  },
  {
    id: 70,
    chapter: "servlets",
    topic: "RequestDispatcher",
    difficulty: "medium",
    question:
      "What is the difference between `forward()` and `sendRedirect()` in servlets?",
    options: [
      "No difference — both send the user to a new URL",
      "forward() is server-side (same request); sendRedirect() sends a new HTTP request from the browser",
      "sendRedirect() is server-side; forward() sends a new browser request",
      "forward() only works for GET; sendRedirect() only for POST",
    ],
    answer: 1,
    explanation:
      "`RequestDispatcher.forward()` transfers control server-side — same request/response, URL does not change in browser. `response.sendRedirect()` tells the browser to make a new request to a different URL.",
  },
  {
    id: 71,
    chapter: "ch6",
    topic: "Comparable & Comparator",
    difficulty: "medium",
    question:
      "What is the difference between `Comparable` and `Comparator` in Java?",
    options: [
      "No difference, they are the same",
      "Comparable defines natural ordering inside the class; Comparator defines external custom ordering",
      "Comparator is deprecated in Java 8+",
      "Comparable uses lambda; Comparator does not",
    ],
    answer: 1,
    explanation:
      "`Comparable<T>` (with compareTo) is implemented by the class for its natural order. `Comparator<T>` is a separate class/lambda for custom ordering, can be defined externally.",
  },
  {
    id: 72,
    chapter: "ch3",
    topic: "Inner Classes",
    difficulty: "hard",
    question:
      "Which type of inner class can exist without an instance of the outer class?",
    options: [
      "Member inner class",
      "Anonymous class",
      "Static nested class",
      "Local class",
    ],
    answer: 2,
    explanation:
      "A static nested class does not need an outer class instance. Non-static inner classes (member, local, anonymous) require an outer class instance to instantiate.",
  },
  {
    id: 73,
    chapter: "ch7",
    topic: "Stack Overflow",
    difficulty: "medium",
    question:
      "Which exception is thrown when the call stack exceeds its limit (usually from infinite recursion)?",
    options: [
      "OutOfMemoryError",
      "StackOverflowError",
      "RecursionException",
      "RuntimeException",
    ],
    answer: 1,
    explanation:
      "`StackOverflowError` (extends `Error`) is thrown when recursive calls exhaust the thread's stack. It's an Error, not an Exception, indicating a serious JVM problem.",
  },
  {
    id: 74,
    chapter: "ch4",
    topic: "Object Class",
    difficulty: "medium",
    question: "What is the root class of all Java classes?",
    options: ["Class", "Root", "java.lang.Object", "Base"],
    answer: 2,
    explanation:
      "Every class in Java implicitly extends `java.lang.Object`. It provides methods like equals(), hashCode(), toString(), getClass(), clone(), wait(), notify(), notifyAll().",
  },
  {
    id: 75,
    chapter: "ch5",
    topic: "Functional Interface",
    difficulty: "hard",
    question: "What defines a Functional Interface in Java?",
    options: [
      "An interface with at least two abstract methods",
      "An interface annotated with @FunctionalInterface with exactly one abstract method",
      "Any interface that can be used with streams",
      "An interface in the java.util.function package",
    ],
    answer: 1,
    explanation:
      "A Functional Interface has exactly one abstract method (SAM type). @FunctionalInterface is optional but causes compile error if violated. Lambdas can replace any functional interface.",
  },
  {
    id: 76,
    chapter: "javafx",
    topic: "Property Binding",
    difficulty: "hard",
    question:
      "What feature of JavaFX allows automatic UI updates when a model value changes?",
    options: [
      "Listeners",
      "Property Binding",
      "Observer Pattern",
      "DataBinding",
    ],
    answer: 1,
    explanation:
      "JavaFX Property Binding synchronizes the values of two properties. `label.textProperty().bind(model.nameProperty())` auto-updates the label when the name property changes.",
    code: "label.textProperty().bind(textField.textProperty()); // bidirectional: bindBidirectional()",
  },
  {
    id: 77,
    chapter: "applets",
    topic: "Applet Parameters",
    difficulty: "medium",
    question: "How do you pass parameters to a Java Applet from HTML?",
    options: [
      "Using URL query parameters",
      'Using <param name="x" value="y"> tags inside <applet> and getParameter("x") in Java',
      "Directly setting fields in HTML",
      "Applets cannot receive parameters",
    ],
    answer: 1,
    explanation:
      "HTML `<param>` tags pass data to applets. The `getParameter(name)` method retrieves these values. This allows configuring the applet without recompiling.",
    code: '// HTML: <param name="color" value="red">\nString color = getParameter("color");',
  },
  {
    id: 78,
    chapter: "ch6",
    topic: "Enum",
    difficulty: "easy",
    question: "What is an enum in Java?",
    options: [
      "A class that can only be instantiated once",
      "A special data type defining a set of named constants",
      "An interface with only constants",
      "A collection of static methods",
    ],
    answer: 1,
    explanation:
      "An enum (enumeration) defines a fixed set of named constants. Enums in Java are full classes, can have fields, methods, and constructors.",
    code: "enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }",
  },
  {
    id: 79,
    chapter: "jdbc",
    topic: "Connection Pooling",
    difficulty: "hard",
    question: "Why is connection pooling used in JDBC applications?",
    options: [
      "To increase the number of SQL statements that can be executed",
      "To reduce the overhead of creating and closing database connections for each request",
      "To enable multiple databases to be queried simultaneously",
      "To encrypt database communications",
    ],
    answer: 1,
    explanation:
      "Creating a database connection is expensive (network handshake, authentication). Connection pools reuse existing connections, dramatically improving performance in high-throughput apps.",
  },
  {
    id: 80,
    chapter: "ch2",
    topic: "Varargs",
    difficulty: "medium",
    question:
      "What does the following method signature mean?\n\nvoid log(String... messages)",
    options: [
      "The method takes exactly one String parameter named messages",
      "The method takes an array of Strings called messages",
      "The method accepts zero or more String arguments (varargs)",
      "Invalid Java syntax",
    ],
    answer: 2,
    explanation:
      "Varargs (`...`) allows passing zero or more arguments of the specified type. Inside the method, `messages` is treated as a String array. Varargs must be the last parameter.",
    code: 'void log(String... messages) {\n  for (String m : messages) System.out.println(m);\n}\nlog("a", "b", "c"); // works!',
  },
  {
    id: 81,
    chapter: "ch1",
    topic: "OOP Concepts",
    difficulty: "medium",
    question:
      "Which OOP concept is demonstrated when a Dog and Cat class both extend Animal and override the speak() method?",
    options: ["Encapsulation", "Abstraction", "Polymorphism", "Compilation"],
    answer: 2,
    explanation:
      "This is polymorphism: different subclasses (Dog, Cat) provide their own implementations of the speak() method. An Animal reference can call speak() and get different behaviors at runtime.",
  },
  {
    id: 82,
    chapter: "ch3",
    topic: "Static vs Instance",
    difficulty: "medium",
    question:
      "What is printed?\n\nclass Counter {\n  static int count = 0;\n  Counter() { count++; }\n}\nnew Counter(); new Counter(); System.out.println(Counter.count);",
    options: ["0", "1", "2", "Error"],
    answer: 2,
    explanation:
      "`count` is a static field shared by all instances. Each `new Counter()` increments it. After two instantiations, count = 2.",
    code: "class Counter { static int count = 0; Counter() { count++; } }\nnew Counter(); new Counter();\nSystem.out.println(Counter.count); // 2",
  },
  {
    id: 83,
    chapter: "ch7",
    topic: "Exception Handling",
    difficulty: "medium",
    question: "Can a finally block throw an exception?",
    options: [
      "No, finally blocks cannot contain throw statements",
      "Yes, but it will suppress any exception from the try/catch block",
      "Yes, and the new exception replaces the original",
      "Only if the original exception was a RuntimeException",
    ],
    answer: 2,
    explanation:
      "If a `finally` block throws an exception, it replaces (suppresses) any exception thrown in the try or catch block. This is a common pitfall to avoid.",
  },
  {
    id: 84,
    chapter: "servlets",
    topic: "Servlet Config",
    difficulty: "medium",
    question:
      "What interface provides initialization parameters to a single servlet?",
    options: [
      "ServletContext",
      "ServletConfig",
      "HttpServletRequest",
      "FilterConfig",
    ],
    answer: 1,
    explanation:
      "`ServletConfig` provides init parameters defined in web.xml for a single servlet. `ServletContext` provides application-wide parameters shared by all servlets.",
  },
  {
    id: 85,
    chapter: "network",
    topic: "HTTP",
    difficulty: "easy",
    question: "What HTTP status code indicates a successful response?",
    options: ["404", "500", "200", "301"],
    answer: 2,
    explanation:
      "200 OK = success. 404 = Not Found. 500 = Internal Server Error. 301 = Moved Permanently (redirect).",
  },
  {
    id: 86,
    chapter: "ch4",
    topic: "Polymorphism",
    difficulty: "hard",
    question: "What is dynamic binding (late binding) in Java?",
    options: [
      "Binding at compile time based on the declared type",
      "Binding at runtime based on the actual object type",
      "Binding private methods at runtime",
      "Static method resolution at class load time",
    ],
    answer: 1,
    explanation:
      "Dynamic binding resolves method calls at runtime based on the actual type of the object, not the reference type. This enables polymorphism. Static and private methods use early (static) binding.",
  },
  {
    id: 87,
    chapter: "ch6",
    topic: "Autoboxing",
    difficulty: "medium",
    question: "What is autoboxing in Java?",
    options: [
      "Automatically compressing objects to save memory",
      "Automatic conversion between primitive types and their wrapper classes",
      "Casting objects automatically",
      "Automatic serialization of objects",
    ],
    answer: 1,
    explanation:
      "Autoboxing automatically converts primitives to wrapper objects (int → Integer) and unboxing does the reverse. This allows primitives to be stored in collections like ArrayList<Integer>.",
  },
  {
    id: 88,
    chapter: "ch5",
    topic: "Abstract Methods",
    difficulty: "easy",
    question: "An abstract method is:",
    options: [
      "A method with an empty body {}",
      "A method declared with no implementation, ending with a semicolon",
      "A private method in an abstract class",
      "A method that cannot be overridden",
    ],
    answer: 1,
    explanation:
      "Abstract methods have no body (no {}) and end with a semicolon: `abstract void draw();`. Subclasses must provide the implementation unless they are also abstract.",
    code: "abstract class Shape {\n  abstract void draw(); // no body!\n}",
  },
  {
    id: 89,
    chapter: "jdbc",
    topic: "SQL Injection",
    difficulty: "medium",
    question: "Which JDBC approach best prevents SQL injection attacks?",
    options: [
      "Validating input manually before concatenating into SQL strings",
      "Using PreparedStatement with parameterized queries",
      "Using Statement with uppercase SQL keywords",
      "Encrypting the SQL query before sending",
    ],
    answer: 1,
    explanation:
      "PreparedStatement uses `?` placeholders and sets values through setter methods. The driver properly escapes values, making SQL injection impossible regardless of input content.",
  },
  {
    id: 90,
    chapter: "javafx",
    topic: "CSS Styling",
    difficulty: "medium",
    question: "How do you apply a CSS stylesheet to a JavaFX Scene?",
    options: [
      'scene.setStyle("file.css")',
      'scene.getStylesheets().add("file.css")',
      'Scene.loadCSS("file.css")',
      'Application.setCSS("file.css")',
    ],
    answer: 1,
    explanation:
      "`scene.getStylesheets().add(cssURL)` loads a CSS file. The URL should be a proper resource URL. JavaFX CSS uses `-fx-` prefixed properties.",
    code: 'scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());',
  },
  {
    id: 91,
    chapter: "ch2",
    topic: "Type Casting",
    difficulty: "medium",
    question: "What is the result of `(int) 3.9` in Java?",
    options: ["4", "3", "3.9", "Compilation error"],
    answer: 1,
    explanation:
      "Casting double to int truncates (not rounds) the decimal portion. `(int) 3.9 = 3`. To round, use `Math.round(3.9) = 4`.",
    code: "int x = (int) 3.9; // x = 3 (truncated)",
  },
  {
    id: 92,
    chapter: "ch3",
    topic: "Immutability",
    difficulty: "medium",
    question: "Why is the String class in Java immutable?",
    options: [
      "Strings use char arrays which cannot be changed",
      "For security (used in class loading, network connections), thread safety, and caching (string pool)",
      "To save memory by preventing copies",
      "Because Java does not support mutable strings",
    ],
    answer: 1,
    explanation:
      "String immutability provides security (prevents modification of class names/URLs), thread safety (no synchronization needed), and enables string pool caching for performance.",
  },
  {
    id: 93,
    chapter: "applets",
    topic: "Security",
    difficulty: "medium",
    question: 'What is the "sandbox" restriction in Java Applets?',
    options: [
      "Applets can only use the Java Sandbox IDE",
      "Applets run in a restricted environment preventing access to the local filesystem and network (other than origin server)",
      "Applets cannot use graphics APIs",
      "Applets must be compiled in sandbox mode",
    ],
    answer: 1,
    explanation:
      "The applet sandbox restricts potentially dangerous operations like local file I/O and arbitrary network connections. This protects users from malicious applet code on web pages.",
  },
  {
    id: 94,
    chapter: "ch4",
    topic: "Covariant Return",
    difficulty: "hard",
    question: "What is a covariant return type in Java?",
    options: [
      "An overriding method that returns the same type as the parent",
      "An overriding method that returns a subtype of the parent method's return type",
      "A method that returns void in both parent and child",
      "A return type that is automatically cast",
    ],
    answer: 1,
    explanation:
      "Covariant return types (Java 5+) allow an overriding method to return a more specific (sub)type. e.g., parent returns Animal, child can return Dog (subtype of Animal).",
    code: "class Parent { Animal create() { return new Animal(); } }\nclass Child extends Parent { Dog create() { return new Dog(); } } // covariant!",
  },
  {
    id: 95,
    chapter: "ch6",
    topic: "Optional",
    difficulty: "medium",
    question: "What is the purpose of `Optional<T>` in Java 8+?",
    options: [
      "To make a field optional in a class",
      "To wrap a value that may or may not be present, avoiding NullPointerException",
      "To create optional parameters in methods",
      "To mark a method as optionally overridable",
    ],
    answer: 1,
    explanation:
      "`Optional<T>` is a container that may hold a value or be empty. Use `Optional.of()`, `Optional.empty()`, `isPresent()`, `orElse()` etc. to handle possibly-null values explicitly.",
    code: 'Optional<String> name = Optional.ofNullable(getNameFromDB());\nString result = name.orElse("Unknown");',
  },
  {
    id: 96,
    chapter: "servlets",
    topic: "Filters",
    difficulty: "hard",
    question: "What is the purpose of a Servlet Filter?",
    options: [
      "To filter HTML output for display",
      "To intercept requests/responses for cross-cutting concerns like logging, auth, compression",
      "To filter SQL queries before execution",
      "To route requests to different servlets",
    ],
    answer: 1,
    explanation:
      "Filters intercept servlet requests and responses using the chain-of-responsibility pattern. Common uses: authentication, logging, caching, request/response transformation.",
    code: "public class AuthFilter implements Filter {\n  public void doFilter(Request req, Response resp, FilterChain chain) {\n    // check auth\n    chain.doFilter(req, resp); // continue\n  }\n}",
  },
  {
    id: 97,
    chapter: "ch1",
    topic: "Design Principles",
    difficulty: "hard",
    question: "The SOLID principles in OOP stand for:",
    options: [
      "Single, Open/Closed, Liskov, Interface Segregation, Dependency Inversion",
      "Static, Open, Linked, Interface, Dependency",
      "Single, Object, Liskov, Inheritance, Dependency",
      "Separation, Open, Linked, Interface, Design",
    ],
    answer: 0,
    explanation:
      "SOLID: S=Single Responsibility, O=Open/Closed, L=Liskov Substitution, I=Interface Segregation, D=Dependency Inversion. These principles guide robust OOP design.",
  },
  {
    id: 98,
    chapter: "ch5",
    topic: "Polymorphism",
    difficulty: "hard",
    question: "What is the Liskov Substitution Principle?",
    options: [
      "Objects of a superclass should be replaceable with objects of a subclass without breaking the program",
      "A class should have only one reason to change",
      "Classes should be open for extension but closed for modification",
      "Depend on abstractions, not concretions",
    ],
    answer: 0,
    explanation:
      "LSP: subclasses must be substitutable for their base classes. If S extends T, then wherever T is used, S should work correctly without the caller knowing.",
  },
  {
    id: 99,
    chapter: "network",
    topic: "Serialization",
    difficulty: "medium",
    question:
      "What must a class do to support Java serialization over object streams?",
    options: [
      "Implement the Serializable marker interface",
      "Implement the Externalizable interface with readExternal/writeExternal",
      "Annotate with @Serializable",
      "Extend the ObjectStream class",
    ],
    answer: 0,
    explanation:
      "`Serializable` is a marker interface (no methods). The JVM handles serialization automatically for fields. Non-serializable fields must be marked `transient`.",
    code: "class User implements Serializable {\n  private static final long serialVersionUID = 1L;\n  String name;\n  transient String password; // not serialized\n}",
  },
  {
    id: 100,
    chapter: "jdbc",
    topic: "CallableStatement",
    difficulty: "hard",
    question: "Which JDBC class is used to call stored procedures?",
    options: [
      "Statement",
      "PreparedStatement",
      "CallableStatement",
      "StoredProcedureStatement",
    ],
    answer: 2,
    explanation:
      '`CallableStatement` extends PreparedStatement and is used to call database stored procedures: `connection.prepareCall("{call procedureName(?, ?)}")`. Supports IN, OUT, and INOUT parameters.',
    code: 'CallableStatement cs = conn.prepareCall("{call getEmployee(?, ?)}");\ncs.setInt(1, empId);\ncs.registerOutParameter(2, Types.VARCHAR);\ncs.execute();\nString name = cs.getString(2);',
  },
];

export const CHAPTERS = [
  {
    id: "ch1",
    title: "OOP Fundamentals",
    subtitle: "Classes, Objects, 4 Pillars",
    icon: "⬡",
    color: "blue",
  },
  {
    id: "ch2",
    title: "Java Basics",
    subtitle: "Types, Modifiers, Static",
    icon: "⬡",
    color: "violet",
  },
  {
    id: "ch3",
    title: "Classes & Objects",
    subtitle: "Constructors, Memory, Methods",
    icon: "⬡",
    color: "cyan",
  },
  {
    id: "ch4",
    title: "Inheritance",
    subtitle: "Extends, super, Overriding",
    icon: "⬡",
    color: "green",
  },
  {
    id: "ch5",
    title: "Polymorphism",
    subtitle: "Interfaces, Abstract, Casting",
    icon: "⬡",
    color: "blue",
  },
  {
    id: "ch6",
    title: "Java API & Packages",
    subtitle: "Collections, Generics, Streams",
    icon: "⬡",
    color: "violet",
  },
  {
    id: "ch7",
    title: "Exception Handling",
    subtitle: "Try-Catch, Checked vs Unchecked",
    icon: "⬡",
    color: "cyan",
  },
  {
    id: "jdbc",
    title: "JDBC",
    subtitle: "SQL, Connections, ResultSet",
    icon: "⬡",
    color: "green",
  },
  {
    id: "javafx",
    title: "JavaFX GUI",
    subtitle: "Scene Graph, Events, FXML",
    icon: "⬡",
    color: "blue",
  },
  {
    id: "network",
    title: "Network Programming",
    subtitle: "Sockets, TCP/UDP, HTTP",
    icon: "⬡",
    color: "violet",
  },
  {
    id: "applets",
    title: "Java Applets",
    subtitle: "Lifecycle, Graphics, Security",
    icon: "⬡",
    color: "cyan",
  },
  {
    id: "servlets",
    title: "Servlets",
    subtitle: "HTTP, Sessions, Filters",
    icon: "⬡",
    color: "green",
  },
];

export function getQuestionsByChapter(chapterId: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.chapter === chapterId);
}

export function getRandomQuestions(
  count: number,
  chapterIds?: string[],
): Question[] {
  const pool = chapterIds
    ? ALL_QUESTIONS.filter((q) => chapterIds.includes(q.chapter))
    : ALL_QUESTIONS;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
