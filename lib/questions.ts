export interface Question {
  id: number
  chapter: number
  chapterId: string
  type: 'conceptual' | 'code-trace'
  question: string
  code?: string
  options: string[]
  answer: number // 0-indexed
  explanation: string
}

export const questions: Question[] = [
  // ===== CHAPTER 1: Exception Handling =====
  {
    id: 1, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'Which keyword is used to manually throw an exception in Java?',
    options: ['throws', 'throw', 'catch', 'finally'],
    answer: 1,
    explanation: '"throw" explicitly throws an exception instance. "throws" is used in method signatures to declare that a method may throw checked exceptions.'
  },
  {
    id: 2, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'Which of the following is a checked exception?',
    options: ['NullPointerException', 'ArithmeticException', 'IOException', 'ArrayIndexOutOfBoundsException'],
    answer: 2,
    explanation: 'IOException is a checked exception (subclass of Exception but not RuntimeException). NullPointerException, ArithmeticException, and ArrayIndexOutOfBoundsException are all RuntimeException subclasses — unchecked.'
  },
  {
    id: 3, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'When is the finally block executed?',
    options: [
      'Only when no exception is thrown',
      'Only when an exception is thrown and caught',
      'Whether or not an exception is thrown',
      'Only when the program exits normally'
    ],
    answer: 2,
    explanation: 'The finally block is guaranteed to execute whenever the try block is exited — whether it completes normally, after a catch block, or when an exception propagates out.'
  },
  {
    id: 4, chapter: 1, chapterId: 'ch1', type: 'code-trace',
    question: 'What is the output of this program?',
    code: `class Test {
    public static void main(String[] args) {
        try {
            int a = 0;
            int b = 42 / a;
            System.out.println("Result: " + b);
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Finally block");
        }
    }
}`,
    options: [
      'Result: 0\nFinally block',
      'Caught: / by zero\nFinally block',
      'Caught: / by zero',
      'Finally block'
    ],
    answer: 1,
    explanation: 'Division by zero throws ArithmeticException. The catch block prints "Caught: / by zero". The finally block always executes, so "Finally block" is printed after.'
  },
  {
    id: 5, chapter: 1, chapterId: 'ch1', type: 'code-trace',
    question: 'What is wrong with this code?',
    code: `try {
    int b = 42 / 0;
} catch (Exception e) {
    System.out.println("Exception");
} catch (ArithmeticException e) {
    System.out.println("Arithmetic");
}`,
    options: [
      'Nothing — it compiles and prints "Arithmetic"',
      'Compile error — ArithmeticException is unreachable (subclass must come before superclass)',
      'Runtime error — both catch blocks execute',
      'Prints "Exception" then "Arithmetic"'
    ],
    answer: 1,
    explanation: 'Subclasses must come before superclasses in catch chains. ArithmeticException is a subclass of Exception, so placing Exception first makes ArithmeticException unreachable — a compile-time error.'
  },
  {
    id: 6, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'What is the root of the Java exception hierarchy?',
    options: ['Exception', 'Error', 'Throwable', 'RuntimeException'],
    answer: 2,
    explanation: 'Throwable is the root of the exception hierarchy. Both Exception and Error extend Throwable. RuntimeException extends Exception.'
  },
  {
    id: 7, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'Which exception should you throw when a method receives an invalid argument value?',
    options: ['IllegalStateException', 'IllegalArgumentException', 'NullPointerException', 'ArithmeticException'],
    answer: 1,
    explanation: 'IllegalArgumentException is the appropriate exception when a parameter value is illegal or inappropriate for the method. The example from the material: withdrawing more than the account balance.'
  },
  {
    id: 8, chapter: 1, chapterId: 'ch1', type: 'code-trace',
    question: 'What does this method declaration imply for the caller?',
    code: `private int quotient(int num, int den) 
    throws ArithmeticException {
    return num / den;
}`,
    options: [
      'The method never throws an exception',
      'The caller must catch or declare ArithmeticException',
      'ArithmeticException is automatically suppressed',
      'The method handles the exception internally'
    ],
    answer: 1,
    explanation: 'When a method declares "throws ArithmeticException", any caller must either catch the exception in a try-catch block or declare it with throws in their own method signature. ArithmeticException is technically unchecked, but declaring it is valid.'
  },
  {
    id: 9, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'What must a user-defined exception class do?',
    options: [
      'Implement the Runnable interface',
      'Extend an existing exception class',
      'Override the main() method',
      'Be declared in the java.lang package'
    ],
    answer: 1,
    explanation: 'A user-defined exception must extend an existing exception class (directly or indirectly through Throwable). This ensures it can be used with Java\'s exception handling mechanism and inherits Throwable methods.'
  },
  {
    id: 10, chapter: 1, chapterId: 'ch1', type: 'code-trace',
    question: 'What is printed?',
    code: `public class Exc {
    public static void main(String[] args) {
        try {
            throw new RuntimeException("test");
        } catch (Exception e) {
            System.out.println("Caught: " + e.getMessage());
            System.out.println("Class: " + e.getClass().getSimpleName());
        }
    }
}`,
    options: [
      'Caught: test\nClass: Exception',
      'Caught: test\nClass: RuntimeException',
      'Compile error',
      'Runtime error — unhandled exception'
    ],
    answer: 1,
    explanation: 'RuntimeException is a subclass of Exception, so the catch(Exception e) block catches it. e.getMessage() returns "test". e.getClass().getSimpleName() returns "RuntimeException" — the actual runtime type of the object.'
  },

  // ===== CHAPTER 2: I/O Streams =====
  {
    id: 11, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'Which Java I/O class hierarchy handles raw binary data (8-bit bytes)?',
    options: ['Reader/Writer', 'InputStream/OutputStream', 'Scanner/PrintWriter', 'BufferedReader/BufferedWriter'],
    answer: 1,
    explanation: 'InputStream/OutputStream are the abstract base classes for byte streams (8-bit binary data). Reader/Writer handle 16-bit Unicode characters.'
  },
  {
    id: 12, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'What does the read() method return when the end of the stream is reached?',
    options: ['0', 'null', '-1', 'throws EOFException'],
    answer: 2,
    explanation: 'The read() method of InputStream (and Reader) returns -1 when the end of the stream has been reached. This is the standard loop termination condition.'
  },
  {
    id: 13, chapter: 2, chapterId: 'ch2', type: 'code-trace',
    question: 'How many times does the loop body execute if the file contains 5 bytes?',
    code: `FileInputStream fis = new FileInputStream("data.bin");
int data;
while ((data = fis.read()) != -1) {
    System.out.print(data + " ");
}
fis.close();`,
    options: ['4 times', '5 times', '6 times', 'Depends on the content'],
    answer: 1,
    explanation: 'The loop reads one byte at a time until read() returns -1 (end of file). With 5 bytes, read() returns a valid value 5 times and -1 on the 6th call, so the loop body executes exactly 5 times.'
  },
  {
    id: 14, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'Which stream class is appropriate for reading a Unicode text file?',
    options: ['FileInputStream', 'FileOutputStream', 'FileReader', 'DataInputStream'],
    answer: 2,
    explanation: 'FileReader is a character stream (extends Reader) and handles 16-bit Unicode characters, making it appropriate for text files. FileInputStream is a byte stream and would give raw bytes.'
  },
  {
    id: 15, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'What is the purpose of the flush() method on an OutputStream?',
    options: [
      'Closes the stream permanently',
      'Forces any buffered output bytes to be written to the underlying stream',
      'Reads remaining data from the buffer',
      'Resets the stream to the beginning'
    ],
    answer: 1,
    explanation: 'flush() forces any data that has been buffered (not yet written to the underlying stream/file) to be written immediately. Important before close() or when you need data to reach its destination.'
  },
  {
    id: 16, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'The java.io package I/O streams are classified by the type of data they process. Which pair is INCORRECT?',
    options: [
      'FileReader — character stream',
      'FileOutputStream — byte stream',
      'BufferedWriter — character stream',
      'DataInputStream — character stream'
    ],
    answer: 3,
    explanation: 'DataInputStream is a byte stream (wraps InputStream, handles primitive data types like readInt, readDouble). BufferedWriter, FileReader are character streams; FileOutputStream is a byte stream.'
  },

  // ===== CHAPTER 3: Specialized Streams =====
  {
    id: 17, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'What is the purpose of DataOutputStream in Java?',
    options: [
      'To write Unicode text to a file',
      'To write Java primitive types to an underlying output stream in a portable way',
      'To buffer writes for performance',
      'To concatenate multiple output streams'
    ],
    answer: 1,
    explanation: 'DataOutputStream wraps another OutputStream and allows writing Java primitives (writeInt, writeDouble, writeUTF, etc.) in a machine-independent binary format that can be read back with DataInputStream.'
  },
  {
    id: 18, chapter: 3, chapterId: 'ch3', type: 'code-trace',
    question: 'What value does readInt() return in this code?',
    code: `DataOutputStream dos = new DataOutputStream(
    new FileOutputStream("test.bin"));
dos.writeInt(255);
dos.writeDouble(1.5);
dos.close();

DataInputStream dis = new DataInputStream(
    new FileInputStream("test.bin"));
int val = dis.readInt();
dis.close();`,
    options: ['1', '255', '1.5', 'Throws IOException'],
    answer: 1,
    explanation: 'writeInt(255) writes 255 as a 4-byte integer. readInt() reads those same 4 bytes and returns 255. Data must be read in the same order it was written.'
  },
  {
    id: 19, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'What is the advantage of using BufferedInputStream over FileInputStream directly?',
    options: [
      'It can read text files',
      'It reads data from memory, reducing disk access by batching reads',
      'It allows random access to file positions',
      'It automatically handles exceptions'
    ],
    answer: 1,
    explanation: 'BufferedInputStream wraps another stream and uses an internal buffer. Instead of one system call per byte, it reads a larger chunk at once, then serves subsequent reads from the buffer — significantly improving performance.'
  },
  {
    id: 20, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'What does SequenceInputStream do?',
    options: [
      'Reads a file byte by byte in sequence',
      'Concatenates multiple input streams, reading them one after another',
      'Writes data to a sequence of output files',
      'Provides buffered sequential access'
    ],
    answer: 1,
    explanation: 'SequenceInputStream allows concatenation of multiple InputStreams. It reads completely from the first stream before moving to the second, presenting them as a single unified stream.'
  },
  {
    id: 21, chapter: 3, chapterId: 'ch3', type: 'code-trace',
    question: 'If file1.txt contains "AB" and file2.txt contains "CD", what does this print?',
    code: `FileInputStream f1 = new FileInputStream("file1.txt");
FileInputStream f2 = new FileInputStream("file2.txt");
SequenceInputStream sis = new SequenceInputStream(f1, f2);
int d;
while ((d = sis.read()) != -1) System.out.print((char)d);
sis.close();`,
    options: ['AB', 'CD', 'ABCD', 'CDAB'],
    answer: 2,
    explanation: 'SequenceInputStream reads from f1 first (producing "AB"), then continues with f2 (producing "CD"), resulting in "ABCD".'
  },
  {
    id: 22, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'To open an existing file and append new data without overwriting it using FileWriter, which constructor call is correct?',
    options: [
      'new FileWriter("file.txt")',
      'new FileWriter("file.txt", true)',
      'new FileWriter("file.txt", false)',
      'new FileWriter("file.txt", "append")'
    ],
    answer: 1,
    explanation: 'FileWriter("filename", true) opens the file in append mode. The boolean parameter controls whether to append (true) or overwrite (false, the default).'
  },

  // ===== CHAPTER 4: Random Access Files =====
  {
    id: 23, chapter: 4, chapterId: 'ch4', type: 'conceptual',
    question: 'What is the purpose of the seek() method in RandomAccessFile?',
    options: [
      'Searches for a string pattern in the file',
      'Moves the file pointer to a specific byte position',
      'Skips a specified number of bytes',
      'Finds the next available write position'
    ],
    answer: 1,
    explanation: 'seek(long pos) moves the file pointer to the specified byte offset from the beginning of the file. Subsequent read/write operations start from that position.'
  },
  {
    id: 24, chapter: 4, chapterId: 'ch4', type: 'code-trace',
    question: 'What does getFilePointer() return after this sequence?',
    code: `RandomAccessFile raf = new RandomAccessFile("f.dat", "rw");
raf.seek(0);
raf.writeInt(100);   // 4 bytes
raf.writeDouble(3.14); // 8 bytes
long pos = raf.getFilePointer();
raf.close();`,
    options: ['0', '4', '8', '12'],
    answer: 3,
    explanation: 'writeInt writes 4 bytes, writeDouble writes 8 bytes. After both writes, the file pointer is at position 4 + 8 = 12.'
  },
  {
    id: 25, chapter: 4, chapterId: 'ch4', type: 'conceptual',
    question: 'How do you append data to the end of a RandomAccessFile?',
    options: [
      'raf.seek(0)',
      'raf.seek(raf.length())',
      'raf.append(data)',
      'raf.write(data, "a")'
    ],
    answer: 1,
    explanation: 'To append, move the pointer to the end of the file using raf.seek(raf.length()). raf.length() returns the total number of bytes in the file, which is the position just past the last byte.'
  },
  {
    id: 26, chapter: 4, chapterId: 'ch4', type: 'conceptual',
    question: 'What is the key difference between RandomAccessFile and sequential file streams?',
    options: [
      'RandomAccessFile can only read, not write',
      'Sequential streams support both read and write; RandomAccessFile only writes',
      'RandomAccessFile supports moving the file pointer to any position; sequential streams read linearly',
      'Sequential streams are faster for all operations'
    ],
    answer: 2,
    explanation: 'RandomAccessFile supports a movable file pointer (seek()) allowing read/write at any position. Sequential streams (FileInputStream, etc.) read/write linearly from start to end.'
  },
  {
    id: 27, chapter: 4, chapterId: 'ch4', type: 'code-trace',
    question: 'What is read from the file after this code?',
    code: `RandomAccessFile raf = new RandomAccessFile("test.dat", "rw");
raf.writeInt(10);   // position 0-3
raf.writeInt(20);   // position 4-7
raf.writeInt(30);   // position 8-11
raf.seek(4);        // move to position 4
int value = raf.readInt();
raf.close();`,
    options: ['10', '20', '30', 'IOException'],
    answer: 1,
    explanation: 'seek(4) moves the pointer to byte position 4, which is where the second writeInt(20) stored its data. readInt() reads 4 bytes from position 4 and returns 20.'
  },

  // ===== CHAPTER 5: JDBC =====
  {
    id: 28, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'What is the correct order of steps in a JDBC workflow?',
    options: [
      'Connect → Load Driver → Statement → Query → ResultSet',
      'Load Driver → Connect → Statement → Query → ResultSet',
      'Statement → Load Driver → Connect → Query → ResultSet',
      'Load Driver → Statement → Connect → ResultSet → Query'
    ],
    answer: 1,
    explanation: 'The standard JDBC 5-step workflow: (1) Load driver with Class.forName(), (2) Establish connection with DriverManager.getConnection(), (3) Create Statement, (4) Execute query, (5) Process ResultSet.'
  },
  {
    id: 29, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'Which JDBC method is used to execute a SELECT query?',
    options: ['executeUpdate()', 'executeQuery()', 'execute()', 'runQuery()'],
    answer: 1,
    explanation: 'executeQuery(sql) is used for SELECT statements and returns a ResultSet. executeUpdate(sql) is used for INSERT, UPDATE, DELETE and returns a row count integer.'
  },
  {
    id: 30, chapter: 5, chapterId: 'ch5', type: 'code-trace',
    question: 'What does this JDBC code print if the students table has rows: (1, "Alice"), (2, "Bob")?',
    code: `Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery(
    "SELECT id, name FROM students");
while (rs.next()) {
    System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
}`,
    options: [
      '1: Alice',
      '1: Alice\n2: Bob',
      '2: Bob\n1: Alice',
      'Throws SQLException — ResultSet not initialized'
    ],
    answer: 1,
    explanation: 'rs.next() advances through each row in order. For each row, getInt("id") and getString("name") retrieve column values. With two rows, it prints both in order: "1: Alice" then "2: Bob".'
  },
  {
    id: 31, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'Which class loads the JDBC driver in the classic approach?',
    options: ['DriverManager', 'Connection', 'Class.forName()', 'Statement'],
    answer: 2,
    explanation: 'Class.forName("com.mysql.jdbc.Driver") dynamically loads the driver class, which registers itself with DriverManager. Then DriverManager.getConnection() uses the registered driver to create a connection.'
  },
  {
    id: 32, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'What does DatabaseMetaData provide?',
    options: [
      'Column names and types of the current ResultSet',
      'Information about the database itself (product name, version, supported features)',
      'The current SQL query being executed',
      'The number of rows in a ResultSet'
    ],
    answer: 1,
    explanation: 'DatabaseMetaData (obtained from con.getMetaData()) provides metadata about the database: name, version, supported SQL features, table lists, etc. ResultSetMetaData (from rs.getMetaData()) provides column info for a ResultSet.'
  },
  {
    id: 33, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'What is the JDBC URL format for MySQL?',
    options: [
      'mysql://localhost/dbname',
      'jdbc:mysql://localhost/dbname',
      'db:mysql:localhost:dbname',
      'java:sql:mysql://localhost/dbname'
    ],
    answer: 1,
    explanation: 'JDBC URL format is jdbc:subprotocol:subname. For MySQL: jdbc:mysql://hostname/databasename (optionally with port: jdbc:mysql://localhost:3306/dbname).'
  },

  // ===== CHAPTER 6: GUI / JavaFX =====
  {
    id: 34, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'What is the correct inheritance order of Java GUI toolkits from oldest to newest?',
    options: ['Swing → AWT → JavaFX', 'JavaFX → AWT → Swing', 'AWT → Swing → JavaFX', 'AWT → JavaFX → Swing'],
    answer: 2,
    explanation: 'AWT was the original Java GUI toolkit. Swing was built on AWT, adding lightweight components. JavaFX is the modern replacement with hardware acceleration, CSS, FXML, and scene graphs.'
  },
  {
    id: 35, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'In JavaFX, what is the Stage?',
    options: [
      'The root layout pane for arranging controls',
      'The top-level window container',
      'The event listener for user interactions',
      'The CSS theme applied to the application'
    ],
    answer: 1,
    explanation: 'The Stage is the top-level window in JavaFX. It is passed to the start() method of Application and is analogous to a JFrame in Swing. A Stage contains a Scene, which contains the scene graph.'
  },
  {
    id: 36, chapter: 6, chapterId: 'ch6', type: 'code-trace',
    question: 'What does this JavaFX code do when the button is clicked?',
    code: `Button btn = new Button("Click Me");
btn.setOnAction(e -> System.out.println("Clicked!"));`,
    options: [
      'Prints "Clicked!" when the application starts',
      'Prints "Clicked!" when the button is clicked',
      'Throws NullPointerException',
      'Compiles but does nothing'
    ],
    answer: 1,
    explanation: 'setOnAction() registers an event handler (here a lambda) that runs when the button fires an ActionEvent (user click). The lambda prints "Clicked!" each time the button is clicked.'
  },
  {
    id: 37, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'Which JavaFX layout pane arranges its children in a single horizontal row?',
    options: ['VBox', 'HBox', 'GridPane', 'BorderPane'],
    answer: 1,
    explanation: 'HBox arranges children horizontally. VBox arranges children vertically. GridPane uses a row/column grid. BorderPane divides the area into 5 regions (top, bottom, left, right, center).'
  },
  {
    id: 38, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'What class must a JavaFX application extend?',
    options: ['JFrame', 'Applet', 'Application', 'Component'],
    answer: 2,
    explanation: 'A JavaFX application must extend javafx.application.Application and override the start(Stage primaryStage) method. The JVM calls launch(args) which sets up the JavaFX platform and calls start().'
  },

  // ===== CHAPTER 7: Multithreading =====
  {
    id: 39, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'What are the two ways to create a thread in Java?',
    options: [
      'Extend Thread and implement Callable',
      'Extend Thread or implement Runnable',
      'Implement Runnable and implement Callable',
      'Extend Thread and extend Process'
    ],
    answer: 1,
    explanation: 'The two standard ways to create a thread in Java are: (1) extend the Thread class and override run(), or (2) implement the Runnable interface and pass the instance to a Thread constructor. Runnable is preferred as Java does not support multiple class inheritance.'
  },
  {
    id: 40, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'What is a race condition?',
    options: [
      'A competition between threads to start first',
      'When multiple threads access and modify shared data concurrently, leading to unpredictable results',
      'When a thread waits too long for a lock',
      'A deadlock between two threads'
    ],
    answer: 1,
    explanation: 'A race condition occurs when two or more threads access shared data concurrently and the final outcome depends on the timing/order of execution — leading to unpredictable, incorrect results.'
  },
  {
    id: 41, chapter: 7, chapterId: 'ch7', type: 'code-trace',
    question: 'What is the key problem with this code?',
    code: `class Counter {
    private int count = 0;
    public void increment() { count++; }
    public int getCount() { return count; }
}
// Used by 1000 concurrent threads`,
    options: [
      'It will throw ArrayIndexOutOfBoundsException',
      'count++ is not atomic — read-modify-write can be interleaved by multiple threads causing a race condition',
      'The method names are invalid',
      'It will deadlock'
    ],
    answer: 1,
    explanation: 'count++ is NOT atomic — it involves three operations: read count, increment it, write it back. Multiple threads can interleave these steps, causing lost updates. The fix is to add the synchronized keyword to the method.'
  },
  {
    id: 42, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'In the Lock interface, what should always be called in a finally block?',
    options: ['lock.lock()', 'lock.unlock()', 'lock.signal()', 'lock.await()'],
    answer: 1,
    explanation: 'lock.unlock() must always be called in a finally block to ensure the lock is released even if an exception occurs in the critical section. Failing to unlock causes deadlock for all threads waiting on the lock.'
  },
  {
    id: 43, chapter: 7, chapterId: 'ch7', type: 'code-trace',
    question: 'What does await() do when called on a Condition?',
    code: `lock.lock();
try {
    while (count == items.length) {
        notFull.await();
    }
    // ... add item
} finally { lock.unlock(); }`,
    options: [
      'Acquires the lock and continues',
      'Releases the lock and suspends the thread until signaled',
      'Permanently stops the thread',
      'Throws InterruptedException immediately'
    ],
    answer: 1,
    explanation: 'await() atomically releases the associated lock and suspends the current thread. The thread remains suspended until another thread calls signal() or signalAll() on the same Condition, at which point it re-acquires the lock and resumes.'
  },
  {
    id: 44, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'What is the difference between signal() and signalAll()?',
    options: [
      'signal() wakes all waiting threads; signalAll() wakes only one',
      'signal() wakes one randomly selected waiting thread; signalAll() wakes all waiting threads on that Condition',
      'They are identical in behavior',
      'signal() is for intrinsic locks; signalAll() is for explicit Locks'
    ],
    answer: 1,
    explanation: 'signal() wakes one waiting thread (arbitrarily chosen). signalAll() wakes all threads waiting on that Condition. signalAll() is safer when unsure which thread should proceed, but less efficient. These are the Condition equivalents of notify()/notifyAll().'
  },

  // ===== CHAPTER 8: Java Applets =====
  {
    id: 45, chapter: 8, chapterId: 'ch8', type: 'conceptual',
    question: 'Which method is called only once when an applet is first loaded?',
    options: ['start()', 'paint()', 'init()', 'run()'],
    answer: 2,
    explanation: 'init() is called exactly once when the applet is first loaded — it is used for one-time initialization (similar to a constructor). start() is called each time the applet becomes visible, which can happen multiple times.'
  },
  {
    id: 46, chapter: 8, chapterId: 'ch8', type: 'conceptual',
    question: 'What is the correct lifecycle order for a Java Applet?',
    options: [
      'start → init → paint → stop → destroy',
      'init → start → paint → stop → destroy',
      'init → paint → start → stop → destroy',
      'start → paint → init → destroy → stop'
    ],
    answer: 1,
    explanation: 'Applet lifecycle: init() (first load) → start() (becomes visible) → paint() (render) → stop() (user navigates away) → destroy() (applet removed from memory). start()/stop() can cycle multiple times; init()/destroy() are called once each.'
  },
  {
    id: 47, chapter: 8, chapterId: 'ch8', type: 'conceptual',
    question: 'What class does a basic Java Applet extend?',
    options: ['java.applet.Application', 'java.applet.Applet', 'javax.swing.JFrame', 'java.awt.Frame'],
    answer: 1,
    explanation: 'Basic applets extend java.applet.Applet. Swing-based applets extend javax.swing.JApplet. Neither has a main() method — the browser/applet viewer controls their lifecycle.'
  },
  {
    id: 48, chapter: 8, chapterId: 'ch8', type: 'code-trace',
    question: 'When is the paint(Graphics g) method called?',
    code: `public class MyApplet extends Applet {
    public void paint(Graphics g) {
        g.drawString("Hello", 20, 20);
    }
}`,
    options: [
      'Only when init() completes',
      'Only when the user clicks on the applet',
      'Called by the browser whenever the applet needs to be redrawn (after start, resize, expose, etc.)',
      'Called exactly once at startup'
    ],
    answer: 2,
    explanation: 'paint() is called whenever the browser needs to redraw the applet: after start(), after being exposed (window moved/resized), or when repaint() is called. It can be invoked multiple times.'
  },

  // ===== CHAPTER 9: Web Servlets =====
  {
    id: 49, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'What class must a Java web servlet extend?',
    options: ['Servlet', 'GenericServlet', 'HttpServlet', 'WebServlet'],
    answer: 2,
    explanation: 'HTTP servlets extend javax.servlet.http.HttpServlet. It provides doGet() and doPost() methods for handling HTTP GET and POST requests, built on top of GenericServlet which implements the Servlet interface.'
  },
  {
    id: 50, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'What is the difference between doGet() and doPost() in a servlet?',
    options: [
      'doGet() is faster; doPost() is more secure',
      'doGet() handles HTTP GET requests (params in URL); doPost() handles HTTP POST (params in request body)',
      'doGet() returns HTML; doPost() returns JSON',
      'They are identical — both handle all HTTP methods'
    ],
    answer: 1,
    explanation: 'doGet() handles GET requests where parameters are in the URL query string. doPost() handles POST requests where parameters are in the HTTP request body. POST is preferred for sensitive data or large payloads.'
  },
  {
    id: 51, chapter: 9, chapterId: 'ch9', type: 'code-trace',
    question: 'What method retrieves a form parameter value in a servlet?',
    code: `protected void doPost(HttpServletRequest req, 
                              HttpServletResponse res) {
    String username = req.____________("username");
}`,
    options: ['req.getParam()', 'req.getParameter()', 'req.getValue()', 'req.getAttribute()'],
    answer: 1,
    explanation: 'request.getParameter("name") retrieves the value of the named form parameter from both GET query strings and POST body. getAttribute() retrieves request-scoped attributes set programmatically (not form params).'
  },
  {
    id: 52, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'What is the Servlet Container (e.g. Apache Tomcat) responsible for?',
    options: [
      'Compiling Java servlet source code',
      'Managing the complete lifecycle of servlets: loading, instantiation, initialization, request handling, and destruction',
      'Providing the MySQL database connection',
      'Rendering HTML pages in the browser'
    ],
    answer: 1,
    explanation: 'The Servlet Container (web server / application server like Tomcat) manages servlet lifecycle: loads and instantiates the servlet class, calls init(), routes requests to service()/doGet()/doPost(), and calls destroy() when removing the servlet.'
  },
  {
    id: 53, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'Which method in the Servlet lifecycle is called for EVERY HTTP request?',
    options: ['init()', 'service()', 'destroy()', 'doInit()'],
    answer: 1,
    explanation: 'service() is called for every incoming HTTP request. It examines the request type and dispatches to doGet(), doPost(), doPut(), etc. init() and destroy() are called only once (at creation and removal).'
  },

  // ===== ADDITIONAL MIXED QUESTIONS =====
  {
    id: 54, chapter: 1, chapterId: 'ch1', type: 'code-trace',
    question: 'What is the output?',
    code: `public class FinallyTest {
    public static void main(String[] args) {
        System.out.println(test());
    }
    static int test() {
        try {
            return 1;
        } finally {
            return 2;
        }
    }
}`,
    options: ['1', '2', '1\n2', 'Compile error'],
    answer: 1,
    explanation: 'Even though the try block has "return 1", the finally block executes before the method returns. "return 2" in finally overrides the try\'s return value, so the method returns 2. The finally block\'s return wins.'
  },
  {
    id: 55, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'Which stream should you use to write character data with platform-appropriate line endings?',
    options: ['FileOutputStream', 'PrintStream', 'BufferedWriter', 'DataOutputStream'],
    answer: 2,
    explanation: 'BufferedWriter has a newLine() method that writes the platform-appropriate line separator (\\n on Unix, \\r\\n on Windows). PrintWriter/PrintStream also work but BufferedWriter with newLine() is the purest character-stream approach.'
  },
  {
    id: 56, chapter: 3, chapterId: 'ch3', type: 'code-trace',
    question: 'What will happen if you try to readDouble() when the DataInputStream was written with writeInt() followed by writeDouble()?',
    code: `// Written as:
dos.writeInt(42);      // 4 bytes
dos.writeDouble(3.14); // 8 bytes

// Read as:
double val = dis.readDouble(); // reads FIRST 8 bytes`,
    options: [
      'Returns 3.14 correctly',
      'Returns a garbage double value (misinterprets the first 4 int bytes + next 4 bytes as a double)',
      'Throws ClassCastException',
      'Throws NumberFormatException'
    ],
    answer: 1,
    explanation: 'readDouble() reads 8 bytes. The file starts with 4 bytes of writeInt(42) followed by 8 bytes of writeDouble(3.14). Reading a double first misaligns the read — it interprets bytes [0..7] (int 42\'s 4 bytes + first 4 bytes of the double) as a double, producing a garbage value.'
  },
  {
    id: 57, chapter: 4, chapterId: 'ch4', type: 'code-trace',
    question: 'After this code, what is the file length in bytes?',
    code: `RandomAccessFile raf = new RandomAccessFile("out.dat", "rw");
raf.seek(0);
raf.writeInt(1);    // 4 bytes
raf.writeInt(2);    // 4 bytes
raf.writeInt(3);    // 4 bytes
raf.close();`,
    options: ['3 bytes', '4 bytes', '8 bytes', '12 bytes'],
    answer: 3,
    explanation: 'Each writeInt() writes exactly 4 bytes. Three calls write 3 × 4 = 12 bytes total. The file length is 12 bytes.'
  },
  {
    id: 58, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'What does executeUpdate() return when used with an INSERT statement?',
    options: [
      'A ResultSet with the inserted row',
      'The number of rows affected (e.g., 1 for a single insert)',
      'The auto-generated primary key',
      'A boolean indicating success'
    ],
    answer: 1,
    explanation: 'executeUpdate() returns an int representing the number of rows affected. For an INSERT of one row, it returns 1. For a DELETE affecting 5 rows, it returns 5. For DDL statements (CREATE TABLE), it returns 0.'
  },
  {
    id: 59, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'What is the key advantage of Swing over AWT?',
    options: [
      'Swing components are faster than AWT',
      'Swing components are lightweight (pure Java, not OS-dependent) with pluggable look-and-feel',
      'Swing supports 3D graphics natively',
      'Swing was released before AWT'
    ],
    answer: 1,
    explanation: 'Swing components are "lightweight" — drawn entirely by Java, not delegated to OS native widgets. This gives consistent appearance across platforms and pluggable look-and-feel. AWT components are "heavyweight" and depend on native OS widgets.'
  },
  {
    id: 60, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'What thread lifecycle state is a thread in after start() is called but before the CPU schedules it to run?',
    options: ['New', 'Runnable', 'Running', 'Blocked'],
    answer: 1,
    explanation: 'After start() is called, the thread transitions from New to Runnable. It is ready to run and waiting for CPU scheduling. When the CPU selects it, it moves to Running. New is before start() is called.'
  },
  {
    id: 61, chapter: 8, chapterId: 'ch8', type: 'conceptual',
    question: 'What HTML tag was traditionally used to embed a Java Applet in a webpage?',
    options: ['<java>', '<servlet>', '<applet>', '<embed-java>'],
    answer: 2,
    explanation: 'The <applet> tag (and later <object>) was used to embed Java applets. Example: <applet code="MyApplet.class" width="300" height="200">. Applets are deprecated in modern Java and removed from most browsers.'
  },
  {
    id: 62, chapter: 9, chapterId: 'ch9', type: 'code-trace',
    question: 'What does this servlet code do?',
    code: `response.setContentType("text/html");
PrintWriter out = response.getWriter();
out.println("<h1>Hello!</h1>");`,
    options: [
      'Writes "Hello!" to the server log',
      'Sends an HTML response to the client browser',
      'Throws NullPointerException — PrintWriter not initialized',
      'Creates a file named text/html'
    ],
    answer: 1,
    explanation: 'setContentType tells the browser the MIME type of the response. getWriter() returns a PrintWriter for writing to the HTTP response body. println("<h1>Hello!</h1>") sends the HTML to the client browser.'
  },
  {
    id: 63, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'What happens to the program flow after a throw statement executes?',
    options: [
      'Execution continues with the next statement',
      'Execution stops immediately at throw and transfers to the nearest matching catch',
      'The method returns null',
      'The exception is logged and ignored'
    ],
    answer: 1,
    explanation: 'After throw executes, the flow stops immediately — any subsequent statements in the method are skipped. The JVM unwinds the call stack looking for a matching catch block.'
  },
  {
    id: 64, chapter: 2, chapterId: 'ch2', type: 'code-trace',
    question: 'What is the output of this code if the file "data.txt" contains the single character "A" (ASCII 65)?',
    code: `FileInputStream fis = new FileInputStream("data.txt");
int b = fis.read();
System.out.println(b);
fis.close();`,
    options: ['"A"', '65', '1', '-1'],
    answer: 1,
    explanation: 'FileInputStream.read() returns the byte value as an int (0-255), not as a character. The character "A" has ASCII value 65, so it prints 65. To print the character, you would cast: System.out.println((char)b).'
  },
  {
    id: 65, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'Which stream class adds buffering capability to an existing OutputStream?',
    options: ['BufferedInputStream', 'BufferedOutputStream', 'DataOutputStream', 'PrintStream'],
    answer: 1,
    explanation: 'BufferedOutputStream wraps any OutputStream and adds an internal buffer. It accumulates writes and sends them to the underlying stream in larger chunks, reducing the number of system calls.'
  },
  {
    id: 66, chapter: 4, chapterId: 'ch4', type: 'conceptual',
    question: 'Which mode string makes RandomAccessFile read-write and creates the file if it does not exist?',
    options: ['"r"', '"w"', '"rw"', '"rws"'],
    answer: 2,
    explanation: '"rw" opens for reading and writing, creating the file if it does not exist. "r" is read-only. "rws" also synchronizes writes to the underlying storage device.'
  },
  {
    id: 67, chapter: 5, chapterId: 'ch5', type: 'conceptual',
    question: 'What is the advantage of PreparedStatement over Statement in JDBC?',
    options: [
      'PreparedStatement is faster at loading drivers',
      'PreparedStatement precompiles SQL and uses parameterized queries, preventing SQL injection',
      'PreparedStatement can only execute SELECT queries',
      'PreparedStatement automatically closes the connection'
    ],
    answer: 1,
    explanation: 'PreparedStatement precompiles the SQL query on the server and uses "?" placeholders for parameters. User input is treated as data (not SQL code), preventing SQL injection attacks. It is also more efficient for repeated queries.'
  },
  {
    id: 68, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'In JavaFX, what is a Scene?',
    options: [
      'The top-level window (OS frame)',
      'The container that holds the scene graph (hierarchy of nodes)',
      'A CSS style sheet for the application',
      'An animation timeline'
    ],
    answer: 1,
    explanation: 'A Scene is the container for the scene graph. It sits inside a Stage (the OS window). The scene graph is a hierarchical tree of Node objects (layout panes, controls, shapes). Syntax: new Scene(rootNode, width, height).'
  },
  {
    id: 69, chapter: 7, chapterId: 'ch7', type: 'code-trace',
    question: 'Which approach correctly creates and starts a thread using a lambda?',
    options: [
      'Thread t = new Thread(); t.run(() -> System.out.println("Hi"));',
      'Thread t = new Thread(() -> System.out.println("Hi")); t.start();',
      'Runnable r = new Thread(() -> System.out.println("Hi")); r.start();',
      'new Thread.start(() -> System.out.println("Hi"));'
    ],
    answer: 1,
    explanation: 'Thread accepts a Runnable in its constructor. A lambda () -> ... implements Runnable functionally. t.start() — NOT t.run() — is needed to actually create a new thread. Calling run() directly executes it in the current thread.'
  },
  {
    id: 70, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'What is a deadlock?',
    options: [
      'When a thread is waiting for its own lock',
      'When two or more threads are each waiting for a lock held by another, creating a cycle where none can proceed',
      'When a thread runs forever without completing',
      'When a synchronized method throws an exception'
    ],
    answer: 1,
    explanation: 'Deadlock occurs when Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1. Neither can proceed. Prevention strategies include: always acquiring locks in the same order, using tryLock() with timeouts.'
  },
  {
    id: 71, chapter: 1, chapterId: 'ch1', type: 'code-trace',
    question: 'What exception is thrown by this code?',
    code: `String s = null;
System.out.println(s.length());`,
    options: ['NullPointerException', 'IllegalArgumentException', 'IllegalStateException', 'NoSuchMethodException'],
    answer: 0,
    explanation: 'Calling a method on a null reference throws NullPointerException. s is null, so s.length() triggers a NullPointerException at runtime. This is an unchecked RuntimeException.'
  },
  {
    id: 72, chapter: 2, chapterId: 'ch2', type: 'conceptual',
    question: 'What is the relationship between InputStream and FileInputStream?',
    options: [
      'FileInputStream is the abstract class; InputStream is the concrete subclass',
      'InputStream is the abstract base class; FileInputStream is a concrete subclass for file I/O',
      'They are the same class with different names',
      'FileInputStream extends OutputStream'
    ],
    answer: 1,
    explanation: 'InputStream is the abstract base class defining the contract for byte input streams. FileInputStream is a concrete subclass that implements reading bytes from a file. Other concrete subclasses include ByteArrayInputStream, PipedInputStream, etc.'
  },
  {
    id: 73, chapter: 5, chapterId: 'ch5', type: 'code-trace',
    question: 'How many rows are printed if the students table has 3 rows?',
    code: `ResultSet rs = stmt.executeQuery("SELECT * FROM students");
int count = 0;
while (rs.next()) {
    count++;
}
System.out.println(count);`,
    options: ['0', '1', '3', 'Depends on database'],
    answer: 2,
    explanation: 'rs.next() returns true for each row and advances the cursor. With 3 rows, it returns true 3 times (incrementing count to 3), then returns false. So count = 3 is printed.'
  },
  {
    id: 74, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'What is event-driven programming?',
    options: [
      'A program that executes sequential instructions with no user input',
      'A programming model where the application waits for and responds to user events (clicks, keystrokes, etc.)',
      'A program that processes large amounts of data in batches',
      'A program where all methods run in separate threads'
    ],
    answer: 1,
    explanation: 'Event-driven programming means the application sits idle and responds to events (user clicks, mouse moves, keyboard input, timers). In JavaFX, event handlers are registered for specific events and called when those events occur.'
  },
  {
    id: 75, chapter: 8, chapterId: 'ch8', type: 'conceptual',
    question: 'Which applet lifecycle method should you override to pause background activity when the user navigates away?',
    options: ['init()', 'paint()', 'stop()', 'destroy()'],
    answer: 2,
    explanation: 'stop() is called when the user navigates away from the page (applet becomes invisible). Override it to pause background threads, animations, or network activity. start() is called when the user returns.'
  },
  {
    id: 76, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'Which annotation maps a servlet to the URL pattern "/login"?',
    options: [
      '@Servlet("/login")',
      '@WebServlet("/login")',
      '@URLMapping("/login")',
      '@RequestMapping("/login")'
    ],
    answer: 1,
    explanation: '@WebServlet("/login") is the standard Jakarta EE annotation to map a servlet class to a URL pattern. Before annotations, this was done in the web.xml deployment descriptor.'
  },
  {
    id: 77, chapter: 3, chapterId: 'ch3', type: 'code-trace',
    question: 'What is written to the file "out.txt"?',
    code: `BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"));
bw.write("Line1");
bw.newLine();
bw.write("Line2");
bw.flush();
bw.close();`,
    options: [
      'Line1Line2',
      'Line1 followed by a platform newline followed by Line2',
      'Line1\\nLine2 (literal backslash-n)',
      'Only Line1 (flush is needed before newLine)'
    ],
    answer: 1,
    explanation: 'bw.write("Line1") writes Line1. bw.newLine() writes the platform-appropriate line separator. bw.write("Line2") writes Line2. flush() ensures all buffered data is written to the file. The result is two lines.'
  },
  {
    id: 78, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'What is the purpose of the synchronized keyword on a method?',
    options: [
      'It makes the method run faster',
      'It ensures only one thread can execute the method at a time for the same object instance',
      'It runs the method in a separate thread',
      'It prevents the method from being overridden'
    ],
    answer: 1,
    explanation: 'synchronized on a method acquires the object\'s intrinsic monitor lock before executing. Only one thread can hold the lock at a time, preventing concurrent access. For static synchronized methods, the lock is on the Class object.'
  },
  {
    id: 79, chapter: 4, chapterId: 'ch4', type: 'code-trace',
    question: 'What is printed?',
    code: `RandomAccessFile raf = new RandomAccessFile("nums.dat", "rw");
raf.writeInt(10); // bytes 0-3
raf.writeInt(20); // bytes 4-7
raf.writeInt(30); // bytes 8-11
raf.seek(8);
System.out.println(raf.readInt());
raf.close();`,
    options: ['10', '20', '30', 'IOException'],
    answer: 2,
    explanation: 'Each writeInt uses 4 bytes. writeInt(10) is at 0-3, writeInt(20) at 4-7, writeInt(30) at 8-11. seek(8) positions the pointer at byte 8. readInt() reads 4 bytes from position 8, which is 30.'
  },
  {
    id: 80, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'Which statement about unchecked exceptions is TRUE?',
    options: [
      'The compiler forces you to handle all unchecked exceptions',
      'Unchecked exceptions extend RuntimeException or Error and are not enforced by the compiler',
      'Unchecked exceptions cannot be caught with try-catch',
      'Unchecked exceptions must be declared with throws'
    ],
    answer: 1,
    explanation: 'Unchecked exceptions (RuntimeException and Error subclasses) are NOT enforced by the compiler — you don\'t need to catch them or declare them. However, you CAN still catch them if you want. They typically indicate programming bugs (null dereference, array bounds) or JVM errors.'
  },
  {
    id: 81, chapter: 5, chapterId: 'ch5', type: 'code-trace',
    question: 'What is the JDBC URL structure?',
    options: [
      'sql://protocol/database',
      'jdbc:subprotocol:subname (e.g. jdbc:mysql://localhost/mydb)',
      'java:database://server/schema',
      'db:type:host/schema'
    ],
    answer: 1,
    explanation: 'JDBC URL format: jdbc:subprotocol:subname. Subprotocol is the database type (mysql, postgresql, oracle). Subname is database-specific addressing (typically //hostname:port/databasename). Example: jdbc:mysql://localhost:3306/school.'
  },
  {
    id: 82, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'Which BorderPane region is specified with BorderPane.setTop(node)?',
    options: [
      'The leftmost horizontal strip',
      'The topmost horizontal strip spanning the full width',
      'The center square region',
      'The right vertical strip'
    ],
    answer: 1,
    explanation: 'BorderPane divides the space into 5 regions: top (full width horizontal strip at top), bottom (full width at bottom), left (left vertical strip), right (right vertical strip), and center (remaining middle area).'
  },
  {
    id: 83, chapter: 7, chapterId: 'ch7', type: 'code-trace',
    question: 'What is the potential problem in this code?',
    code: `class BankAccount {
    private double balance = 100.0;
    public synchronized void deposit(double amount) {
        balance += amount;
    }
    public double getBalance() {  // NOT synchronized
        return balance;
    }
}`,
    options: [
      'deposit() will throw ArithmeticException',
      'getBalance() is not synchronized, so a thread could read a stale/inconsistent balance while another thread is in deposit()',
      'The synchronized keyword on deposit() causes deadlock',
      'There is no problem'
    ],
    answer: 1,
    explanation: 'If getBalance() is not synchronized, a thread can read balance while another thread is inside deposit() modifying it. This breaks the happens-before guarantee. All methods that access shared mutable state should be synchronized consistently.'
  },
  {
    id: 84, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'What does response.sendRedirect("/result") do in a servlet?',
    options: [
      'Forwards the request internally to /result on the server',
      'Sends an HTTP 302 redirect response, telling the browser to make a new GET request to /result',
      'Throws a ServletException',
      'Reads data from the /result URL'
    ],
    answer: 1,
    explanation: 'sendRedirect() sends an HTTP 302 (Found) response with a Location header pointing to the new URL. The browser automatically makes a new GET request to that URL. It is a client-side redirect (browser makes a second request).'
  },
  {
    id: 85, chapter: 2, chapterId: 'ch2', type: 'code-trace',
    question: 'What does available() return after creating a FileInputStream for an empty file?',
    options: [
      '0 (no bytes available)',
      '-1',
      '1',
      'Throws IOException'
    ],
    answer: 0,
    explanation: 'available() returns an estimate of the number of bytes that can be read without blocking. For an empty file, there are no bytes to read, so it returns 0. It does not block and is an estimate only.'
  },
  {
    id: 86, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'What happens when you close a SequenceInputStream?',
    options: [
      'Only the first stream is closed',
      'Only the last stream is closed',
      'All the underlying streams are closed',
      'Nothing — each stream must be closed individually'
    ],
    answer: 2,
    explanation: 'Closing a SequenceInputStream closes all the underlying input streams that were passed to it. This is part of its contract — a single close() properly releases all resources.'
  },
  {
    id: 87, chapter: 4, chapterId: 'ch4', type: 'conceptual',
    question: 'What is the return type of getFilePointer()?',
    options: ['int', 'long', 'double', 'byte'],
    answer: 1,
    explanation: 'getFilePointer() returns a long representing the current byte offset (position) in the file. long is used because files can be larger than Integer.MAX_VALUE (about 2 GB).'
  },
  {
    id: 88, chapter: 6, chapterId: 'ch6', type: 'code-trace',
    question: 'What does this VBox layout do?',
    code: `VBox root = new VBox(10, button1, button2, label1);`,
    options: [
      'Creates a horizontal row with 10px spacing between button1, button2, and label1',
      'Creates a vertical column with 10px spacing between button1, button2, and label1',
      'Creates a grid with 10 rows',
      'Throws IllegalArgumentException'
    ],
    answer: 1,
    explanation: 'VBox arranges its children in a vertical column. The first argument (10) is the spacing in pixels between children. So button1, button2, and label1 are stacked vertically with 10px gaps.'
  },
  {
    id: 89, chapter: 8, chapterId: 'ch8', type: 'conceptual',
    question: 'What is the key difference between an applet and a standard Java application?',
    options: [
      'Applets run faster than standard applications',
      'Standard applications have main(); applets are lifecycle-managed by a browser/viewer with init/start/paint/stop/destroy',
      'Applets can access the filesystem; standard applications cannot',
      'Standard applications cannot use AWT; applets can'
    ],
    answer: 1,
    explanation: 'Standard Java applications have a main() method as the entry point. Applets have no main() — their lifecycle is controlled by the browser/applet viewer through init(), start(), paint(), stop(), and destroy() callbacks.'
  },
  {
    id: 90, chapter: 9, chapterId: 'ch9', type: 'code-trace',
    question: 'What HTTP method does this servlet respond to?',
    code: `@WebServlet("/submit")
public class FormServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req,
                          HttpServletResponse res) 
                          throws ServletException, IOException {
        String name = req.getParameter("name");
        res.getWriter().println("Hello, " + name);
    }
}`,
    options: ['GET', 'POST', 'Both GET and POST', 'PUT'],
    answer: 1,
    explanation: 'Only doPost() is overridden. This servlet handles HTTP POST requests only. A GET request to /submit would receive a 405 Method Not Allowed response (HttpServlet\'s default doGet returns an error).'
  },
  {
    id: 91, chapter: 1, chapterId: 'ch1', type: 'conceptual',
    question: 'Which of the following is NOT a valid way to handle a checked exception?',
    options: [
      'Catch it with a try-catch block',
      'Declare it with throws in the method signature',
      'Ignore it — it will be suppressed automatically at runtime',
      'Wrap it in a RuntimeException and rethrow'
    ],
    answer: 2,
    explanation: 'Checked exceptions cannot be silently ignored — the compiler enforces that you either catch them or declare them with throws. Wrapping in a RuntimeException is technically valid (though often poor practice).'
  },
  {
    id: 92, chapter: 5, chapterId: 'ch5', type: 'code-trace',
    question: 'What does this JDBC code do?',
    code: `PreparedStatement ps = con.prepareStatement(
    "INSERT INTO students VALUES (?, ?)");
ps.setInt(1, 101);
ps.setString(2, "Alice");
int rows = ps.executeUpdate();`,
    options: [
      'Executes a SELECT query and returns rows',
      'Inserts a row with id=101, name="Alice" and returns the count of affected rows (1)',
      'Updates all students named Alice',
      'Throws SQLException — PreparedStatement cannot use executeUpdate'
    ],
    answer: 1,
    explanation: 'PreparedStatement with "?" placeholders: setInt(1, 101) binds 101 to the first ?, setString(2, "Alice") binds "Alice" to the second ?. executeUpdate() executes the INSERT and returns 1 (one row inserted).'
  },
  {
    id: 93, chapter: 7, chapterId: 'ch7', type: 'conceptual',
    question: 'Why is implementing Runnable preferred over extending Thread?',
    options: [
      'Runnable provides better performance',
      'Extending Thread prevents inheriting from any other class; Runnable allows the class to extend another class',
      'Thread cannot be used with lambdas; Runnable can',
      'Runnable threads run faster'
    ],
    answer: 1,
    explanation: 'Java does not support multiple inheritance of classes. If you extend Thread, your class cannot extend any other class. Implementing Runnable is preferred because your class can still extend another class and implement multiple interfaces.'
  },
  {
    id: 94, chapter: 6, chapterId: 'ch6', type: 'conceptual',
    question: 'What does getParameter() in an applet retrieve?',
    options: [
      'Command-line arguments',
      'Values specified in <param name="..." value="..."> tags in the HTML',
      'System environment variables',
      'Method parameters'
    ],
    answer: 1,
    explanation: 'Applet.getParameter(name) retrieves the value of a <param> tag embedded in the HTML: <param name="color" value="blue">. Use getParameter("color") to retrieve "blue". Returns null if the parameter is not found.'
  },
  {
    id: 95, chapter: 2, chapterId: 'ch2', type: 'code-trace',
    question: 'What is the output of this code if "test.txt" contains "Hello"?',
    code: `FileReader fr = new FileReader("test.txt");
int c;
while ((c = fr.read()) != -1) {
    System.out.print((char) c);
}
fr.close();`,
    options: ['72 101 108 108 111', 'Hello', 'H', 'null'],
    answer: 1,
    explanation: 'FileReader.read() returns a char value as an int. Casting it back with (char) c gives the actual character. The loop reads each character of "Hello" and prints it, producing "Hello".'
  },
  {
    id: 96, chapter: 3, chapterId: 'ch3', type: 'conceptual',
    question: 'What happens if you call close() on a BufferedOutputStream without calling flush() first?',
    options: [
      'Data may be lost — unflushed buffer content is discarded',
      'close() always flushes before closing — no data is lost',
      'A BufferedOutputStream cannot be closed without flushing',
      'The stream continues to accept writes after close()'
    ],
    answer: 1,
    explanation: 'close() on a BufferedOutputStream calls flush() implicitly before closing, ensuring all buffered data is written to the underlying stream. However, it is good practice to explicitly call flush() before close() for clarity and to handle potential exceptions separately.'
  },
  {
    id: 97, chapter: 4, chapterId: 'ch4', type: 'conceptual',
    question: 'A fixed-length record file stores Student records, each 50 bytes. How do you seek to the 4th record (0-indexed)?',
    options: [
      'raf.seek(3)',
      'raf.seek(3 * 50)',
      'raf.seek(4 * 50)',
      'raf.seek(50)'
    ],
    answer: 1,
    explanation: 'For fixed-length records, the byte offset of record n (0-indexed) is n * recordSize. For the 4th record (index 3): 3 * 50 = 150. raf.seek(150) positions the pointer at the start of that record.'
  },
  {
    id: 98, chapter: 9, chapterId: 'ch9', type: 'conceptual',
    question: 'What is the difference between forward (RequestDispatcher.forward()) and redirect (sendRedirect()) in servlets?',
    options: [
      'Forward is server-side (URL in browser stays the same); Redirect causes browser to make a new request (URL changes)',
      'Redirect is server-side; Forward causes a new browser request',
      'Both are server-side — no difference from the browser perspective',
      'forward() only works for HTML; sendRedirect() only works for JSP'
    ],
    answer: 0,
    explanation: 'RequestDispatcher.forward() passes the request to another resource on the server — the browser URL does not change (one request). sendRedirect() sends a 302 to the browser causing it to make a new GET request — the URL changes (two requests). Forward cannot cross domains; redirect can.'
  },
  {
    id: 99, chapter: 7, chapterId: 'ch7', type: 'code-trace',
    question: 'What is wrong with this synchronization pattern?',
    code: `Lock lock = new ReentrantLock();
void process() {
    lock.lock();
    doSomethingRisky(); // may throw exception
    lock.unlock();      // never called if exception thrown!
}`,
    options: [
      'Nothing — it is correct',
      'If doSomethingRisky() throws, unlock() is never called, causing permanent deadlock',
      'ReentrantLock cannot be used in methods',
      'lock() should be inside the try block'
    ],
    answer: 1,
    explanation: 'If doSomethingRisky() throws an exception, execution jumps out of process() and unlock() is never called. All threads waiting on this lock will deadlock permanently. The fix: always use lock/unlock with try-finally: lock.lock(); try {...} finally { lock.unlock(); }'
  },
  {
    id: 100, chapter: 5, chapterId: 'ch5', type: 'code-trace',
    question: 'What is the correct way to iterate over a ResultSet?',
    options: [
      'for (int i = 0; i < rs.size(); i++) { rs.get(i); }',
      'while (rs.next()) { rs.getString("col"); }',
      'rs.forEach(row -> process(row));',
      'for (Row r : rs) { r.get("col"); }'
    ],
    answer: 1,
    explanation: 'ResultSet.next() advances the cursor to the next row, returning true if a row exists and false at the end. The standard idiom is while (rs.next()) { /* read columns */ }. The cursor starts before the first row.'
  }
]
