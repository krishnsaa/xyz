db.questions.insertMany([

/* ======================= C LANGUAGE (25) ======================= */

{
  text: "Which loop is entry-controlled in C?",
  options: ["for loop", "do-while loop", "repeat-until loop", "None of these"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "What is the correct syntax to declare a pointer in C?",
  options: ["int *p;", "int p*;", "pointer int p;", "int &p;"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "Which function is used to allocate memory dynamically?",
  options: ["malloc()", "alloc()", "memalloc()", "callocall()"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "What does the sizeof operator return?",
  options: ["Size in bits", "Size in bytes", "Address size", "Value size"],
  correctIndex: 1,
  domain: "c"
},
{
  text: "Which header file is required for printf()?",
  options: ["stdio.h", "stdlib.h", "conio.h", "string.h"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "Which data type is typically used to store characters?",
  options: ["int", "float", "char", "double"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "What does NULL represent in C?",
  options: ["Zero", "Empty string", "Invalid memory address", "Garbage value"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "Which operator is used to access the value pointed to by a pointer?",
  options: ["&", "*", "#", "@"],
  correctIndex: 1,
  domain: "c"
},
{
  text: "Which function compares two strings?",
  options: ["strcmp()", "strcpy()", "strlen()", "strcat()"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "What is a dangling pointer?",
  options: [
    "Pointer not initialized",
    "Pointer pointing to freed memory",
    "Pointer pointing to NULL",
    "Pointer with garbage value"
  ],
  correctIndex: 1,
  domain: "c"
},
{
  text: "Which loop executes at least once?",
  options: ["for", "while", "do-while", "none"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "Which keyword prevents variable modification?",
  options: ["static", "final", "const", "volatile"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "Which function reads a string including spaces?",
  options: ["scanf()", "gets()", "fgets()", "puts()"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "Which operator has the highest precedence?",
  options: ["*", "++", "+", "="],
  correctIndex: 1,
  domain: "c"
},
{
  text: "What does EOF signify?",
  options: ["End of File", "Error of File", "Exit of Function", "None"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "Which function frees dynamically allocated memory?",
  options: ["delete()", "remove()", "free()", "clear()"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "Which storage class gives global lifetime?",
  options: ["auto", "register", "static", "extern"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "What is recursion?",
  options: [
    "Loop inside function",
    "Function calling itself",
    "Multiple loops",
    "Infinite loop"
  ],
  correctIndex: 1,
  domain: "c"
},
{
  text: "Which operator is used for conditional expressions?",
  options: ["?:", "&&", "||", "if"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "What causes stack overflow?",
  options: [
    "Large heap usage",
    "Infinite recursion",
    "Memory leak",
    "Pointer misuse"
  ],
  correctIndex: 1,
  domain: "c"
},
{
  text: "Which function converts string to integer?",
  options: ["atoi()", "itoa()", "strint()", "intstr()"],
  correctIndex: 0,
  domain: "c"
},
{
  text: "Which loop is best when number of iterations is known?",
  options: ["while", "do-while", "for", "goto"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "What does typedef do?",
  options: [
    "Defines constant",
    "Creates alias for data type",
    "Allocates memory",
    "Creates macro"
  ],
  correctIndex: 1,
  domain: "c"
},
{
  text: "Which function is used to open a file?",
  options: ["open()", "file()", "fopen()", "read()"],
  correctIndex: 2,
  domain: "c"
},
{
  text: "Which operator is used to get address of variable?",
  options: ["*", "&", "%", "$"],
  correctIndex: 1,
  domain: "c"
},

/* ======================= C++ (25) ======================= */

{
  text: "Which feature of C++ supports OOP?",
  options: ["Pointers", "Classes", "Macros", "Structures"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What is the default access specifier in a C++ class?",
  options: ["public", "private", "protected", "global"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "Which keyword is used to create an object dynamically?",
  options: ["new", "malloc", "create", "alloc"],
  correctIndex: 0,
  domain: "cpp"
},
{
  text: "What is function overloading?",
  options: [
    "Same function name, different parameters",
    "Same function name, same parameters",
    "Different function names",
    "Function inside function"
  ],
  correctIndex: 0,
  domain: "cpp"
},
{
  text: "Which keyword prevents inheritance?",
  options: ["static", "final", "sealed", "const"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "Which concept binds data and methods together?",
  options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "Which operator cannot be overloaded?",
  options: ["+", "=", "?:", "<<"],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "What is a destructor?",
  options: [
    "Deletes class",
    "Initializes object",
    "Destroys object",
    "Allocates memory"
  ],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "Which container stores elements contiguously?",
  options: ["list", "vector", "map", "set"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What is virtual function?",
  options: [
    "Inline function",
    "Static function",
    "Function resolved at runtime",
    "Template function"
  ],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "What is polymorphism?",
  options: [
    "Multiple inheritance",
    "Multiple forms of function",
    "Multiple objects",
    "Multiple constructors"
  ],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "Which keyword is used for inheritance?",
  options: ["inherits", "extends", ":", "->"],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "What is a copy constructor?",
  options: [
    "Copies values",
    "Initializes new object from existing",
    "Deletes object",
    "Creates pointer"
  ],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What does STL stand for?",
  options: [
    "Standard Template Library",
    "System Type Library",
    "Structured Template Logic",
    "Simple Template Library"
  ],
  correctIndex: 0,
  domain: "cpp"
},
{
  text: "Which smart pointer allows only one owner?",
  options: ["shared_ptr", "weak_ptr", "unique_ptr", "auto_ptr"],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "What is a namespace used for?",
  options: [
    "Memory allocation",
    "Avoid name conflicts",
    "Inheritance",
    "Encapsulation"
  ],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "Which keyword creates constant object?",
  options: ["final", "static", "const", "immutable"],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "Which container uses key-value pairs?",
  options: ["vector", "list", "map", "array"],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "What is diamond problem related to?",
  options: ["Polymorphism", "Inheritance", "Templates", "Pointers"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "Which casting is checked at runtime?",
  options: ["static_cast", "dynamic_cast", "reinterpret_cast", "const_cast"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What does delete do?",
  options: [
    "Removes variable",
    "Frees heap memory",
    "Ends program",
    "Clears stack"
  ],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What is inline function?",
  options: [
    "Function inside class",
    "Function expanded at call site",
    "Recursive function",
    "Static function"
  ],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What is exception handling used for?",
  options: [
    "Speed improvement",
    "Memory management",
    "Runtime error handling",
    "Compilation"
  ],
  correctIndex: 2,
  domain: "cpp"
},
{
  text: "Which keyword is used to throw exception?",
  options: ["raise", "throw", "catch", "error"],
  correctIndex: 1,
  domain: "cpp"
},
{
  text: "What is RAII?",
  options: [
    "Runtime Allocation",
    "Resource Acquisition Is Initialization",
    "Random Access Inheritance",
    "Recursive Allocation Interface"
  ],
  correctIndex: 1,
  domain: "cpp"
}

]);




db.questions.insertMany([

/* ======================= JAVA (25) ======================= */

{
  text: "What is the main responsibility of the JVM?",
  options: [
    "Compile Java code",
    "Execute bytecode",
    "Write source code",
    "Manage databases"
  ],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which keyword is used to inherit a class in Java?",
  options: ["this", "super", "extends", "implements"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "Which of these is NOT a Java primitive data type?",
  options: ["int", "float", "String", "boolean"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "What is method overloading?",
  options: [
    "Same method name with different parameters",
    "Same method name in different classes",
    "Same method with same signature",
    "Method calling itself"
  ],
  correctIndex: 0,
  domain: "java"
},
{
  text: "Which keyword prevents method overriding?",
  options: ["static", "final", "private", "protected"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which collection does NOT allow duplicate elements?",
  options: ["List", "ArrayList", "Set", "LinkedList"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "Which exception is thrown when dividing by zero?",
  options: [
    "NullPointerException",
    "ArithmeticException",
    "IOException",
    "NumberFormatException"
  ],
  correctIndex: 1,
  domain: "java"
},
{
  text: "What is an interface in Java?",
  options: [
    "A fully implemented class",
    "A class with constructors",
    "A blueprint with abstract methods",
    "A static utility class"
  ],
  correctIndex: 2,
  domain: "java"
},
{
  text: "Which access modifier makes a member visible everywhere?",
  options: ["default", "private", "protected", "public"],
  correctIndex: 3,
  domain: "java"
},
{
  text: "What is the size of an int in Java?",
  options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which keyword is used to create an object?",
  options: ["create", "new", "alloc", "object"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "What is garbage collection?",
  options: [
    "Manual memory deletion",
    "Automatic memory management",
    "Deleting variables",
    "Clearing stack"
  ],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which class is the parent of all Java classes?",
  options: ["Class", "Base", "Object", "Root"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "Which keyword is used to handle exceptions?",
  options: ["catch", "handle", "error", "resolve"],
  correctIndex: 0,
  domain: "java"
},
{
  text: "What is JVM bytecode?",
  options: [
    "Machine code",
    "Intermediate code",
    "Source code",
    "Binary executable"
  ],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which package contains Scanner class?",
  options: ["java.io", "java.util", "java.lang", "java.net"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which loop is guaranteed to execute at least once?",
  options: ["for", "while", "do-while", "foreach"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "Which keyword is used to call parent class constructor?",
  options: ["this()", "super()", "parent()", "base()"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "What is multithreading?",
  options: [
    "Multiple programs running",
    "Multiple threads in one process",
    "Multiple CPUs",
    "Multiple JVMs"
  ],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which collection maintains insertion order?",
  options: ["HashSet", "TreeSet", "LinkedHashSet", "Set"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "What is an abstract class?",
  options: [
    "Class with no methods",
    "Class that cannot be instantiated",
    "Class with only static methods",
    "Final class"
  ],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which keyword is used to define a constant?",
  options: ["static", "final", "const", "immutable"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which stream is used to read data?",
  options: ["System.out", "System.err", "System.in", "System.read"],
  correctIndex: 2,
  domain: "java"
},
{
  text: "What is the default value of boolean?",
  options: ["true", "false", "null", "0"],
  correctIndex: 1,
  domain: "java"
},
{
  text: "Which keyword stops inheritance?",
  options: ["static", "private", "final", "sealed"],
  correctIndex: 2,
  domain: "java"
},

/* ======================= DSA (25) ======================= */

{
  text: "What is the time complexity of binary search?",
  options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "Which data structure follows FIFO?",
  options: ["Stack", "Queue", "Tree", "Graph"],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "Which data structure uses LIFO?",
  options: ["Queue", "Array", "Stack", "Heap"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is the worst-case time complexity of linear search?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "Which sorting algorithm is fastest on average?",
  options: ["Bubble sort", "Selection sort", "Quick sort", "Insertion sort"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "Which data structure is used in recursion?",
  options: ["Queue", "Stack", "Heap", "Graph"],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "What is a linked list?",
  options: [
    "Collection of arrays",
    "Collection of nodes",
    "Tree structure",
    "Graph structure"
  ],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "Which traversal uses Root-Left-Right order?",
  options: ["Inorder", "Preorder", "Postorder", "Level order"],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "What is a binary tree?",
  options: [
    "Tree with unlimited children",
    "Tree with two children max",
    "Sorted tree",
    "Graph structure"
  ],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "What is the best-case time complexity of bubble sort?",
  options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
  correctIndex: 0,
  domain: "dsa"
},
{
  text: "Which data structure is used for BFS?",
  options: ["Stack", "Queue", "Tree", "Heap"],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "What is a hash table used for?",
  options: [
    "Sorting",
    "Searching",
    "Fast lookup",
    "Traversal"
  ],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "Which algorithm uses divide and conquer?",
  options: ["Bubble sort", "Insertion sort", "Merge sort", "Linear search"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is a graph?",
  options: [
    "Linear structure",
    "Hierarchical structure",
    "Non-linear structure",
    "Sequential structure"
  ],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is the height of a tree?",
  options: [
    "Number of nodes",
    "Number of edges on longest path",
    "Number of leaves",
    "Depth of root"
  ],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "Which traversal uses Left-Root-Right?",
  options: ["Preorder", "Postorder", "Inorder", "Level order"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "Which algorithm finds shortest path?",
  options: ["DFS", "BFS", "Dijkstra", "Prim"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is a heap?",
  options: [
    "Complete binary tree",
    "Sorted array",
    "Linked list",
    "Stack"
  ],
  correctIndex: 0,
  domain: "dsa"
},
{
  text: "Which data structure is best for priority queue?",
  options: ["Array", "Stack", "Heap", "Queue"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is a cycle in a graph?",
  options: [
    "Disconnected graph",
    "Repeated node path",
    "Single node",
    "Tree structure"
  ],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "Which algorithm is used for minimum spanning tree?",
  options: ["DFS", "BFS", "Prim", "Binary search"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is dynamic programming?",
  options: [
    "Recursive only",
    "Divide and conquer",
    "Optimization using overlapping subproblems",
    "Brute force"
  ],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "Which structure uses adjacency list?",
  options: ["Tree", "Stack", "Graph", "Queue"],
  correctIndex: 2,
  domain: "dsa"
},
{
  text: "What is the space complexity of recursion?",
  options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
  correctIndex: 1,
  domain: "dsa"
},
{
  text: "Which algorithm uses greedy approach?",
  options: ["Merge sort", "Dijkstra", "Binary search", "DFS"],
  correctIndex: 1,
  domain: "dsa"
}

]);

db.questions.insertMany([

/* ======================= PYTHON (25) ======================= */

{
  text: "Which keyword is used to define a function in Python?",
  options: ["function", "def", "fun", "define"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "What is the output of len([1, 2, 3])?",
  options: ["2", "3", "Error", "None"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which data type is immutable in Python?",
  options: ["list", "set", "dictionary", "tuple"],
  correctIndex: 3,
  domain: "python"
},
{
  text: "Which symbol is used for comments in Python?",
  options: ["//", "#", "/* */", "--"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "What does PEP stand for?",
  options: [
    "Python Extension Proposal",
    "Python Enhancement Proposal",
    "Program Execution Plan",
    "Python Easy Practice"
  ],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which function converts a string to integer?",
  options: ["str()", "int()", "float()", "eval()"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "What is the output of type([])?",
  options: ["list", "<class 'list'>", "array", "collection"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which keyword is used to handle exceptions?",
  options: ["catch", "except", "error", "handle"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which loop is used to iterate over a sequence?",
  options: ["while", "for", "do-while", "repeat"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which operator is used for exponentiation?",
  options: ["^", "**", "//", "%"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "What does the 'break' statement do?",
  options: [
    "Stops program",
    "Exits loop",
    "Skips iteration",
    "Ends function"
  ],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which method adds an element to a list?",
  options: ["add()", "append()", "insert()", "extend()"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "What is a lambda function?",
  options: [
    "Named function",
    "Anonymous function",
    "Recursive function",
    "Generator"
  ],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which module is used for regular expressions?",
  options: ["regex", "re", "pyregex", "expression"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which keyword creates a class?",
  options: ["class", "struct", "object", "define"],
  correctIndex: 0,
  domain: "python"
},
{
  text: "What is the default return value of a function?",
  options: ["0", "None", "False", "Empty"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which method removes and returns last list item?",
  options: ["remove()", "pop()", "delete()", "clear()"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which data structure stores key-value pairs?",
  options: ["list", "tuple", "set", "dictionary"],
  correctIndex: 3,
  domain: "python"
},
{
  text: "Which keyword is used to create a generator?",
  options: ["return", "yield", "generate", "gen"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "What does __init__ represent?",
  options: [
    "Destructor",
    "Constructor",
    "Main function",
    "Initializer block"
  ],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which library is used for numerical computing?",
  options: ["pandas", "numpy", "matplotlib", "scipy"],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which statement skips current loop iteration?",
  options: ["pass", "break", "continue", "skip"],
  correctIndex: 2,
  domain: "python"
},
{
  text: "What is slicing used for?",
  options: [
    "Looping",
    "Extracting part of sequence",
    "Sorting",
    "Deleting elements"
  ],
  correctIndex: 1,
  domain: "python"
},
{
  text: "Which operator checks identity?",
  options: ["==", "=", "is", "equals"],
  correctIndex: 2,
  domain: "python"
},
{
  text: "Which keyword is used to import modules?",
  options: ["include", "using", "import", "require"],
  correctIndex: 2,
  domain: "python"
},

/* ======================= ARTIFICIAL INTELLIGENCE (25) ======================= */

{
  text: "What is Artificial Intelligence?",
  options: [
    "Human intelligence",
    "Machine simulation of intelligence",
    "Hardware programming",
    "Data storage"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which AI technique mimics human learning?",
  options: ["Heuristics", "Machine Learning", "Compilation", "Encryption"],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is supervised learning?",
  options: [
    "Learning without data",
    "Learning with labeled data",
    "Learning by trial",
    "Uncontrolled learning"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which algorithm is used for classification?",
  options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"],
  correctIndex: 2,
  domain: "ai"
},
{
  text: "What does NLP stand for?",
  options: [
    "Natural Learning Process",
    "Natural Language Processing",
    "Neural Learning Program",
    "Natural Logic Path"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which is an example of unsupervised learning?",
  options: ["Linear Regression", "Decision Tree", "K-Means Clustering", "Naive Bayes"],
  correctIndex: 2,
  domain: "ai"
},
{
  text: "What is overfitting?",
  options: [
    "Model too simple",
    "Model fits noise in data",
    "Model ignores data",
    "Model trains fast"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which algorithm is inspired by the human brain?",
  options: ["Genetic Algorithm", "Neural Network", "KNN", "SVM"],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is a dataset?",
  options: [
    "Algorithm",
    "Collection of data",
    "AI model",
    "Training method"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which metric measures classification accuracy?",
  options: ["MSE", "Accuracy", "Loss", "Gradient"],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is reinforcement learning based on?",
  options: [
    "Labeled data",
    "Reward and penalty",
    "Clustering",
    "Regression"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is an agent in AI?",
  options: [
    "User",
    "Decision-making entity",
    "Dataset",
    "Algorithm"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which AI field deals with image recognition?",
  options: ["NLP", "Computer Vision", "Robotics", "Expert Systems"],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is a neural network?",
  options: [
    "Database",
    "Graph algorithm",
    "Computational model of neurons",
    "Sorting technique"
  ],
  correctIndex: 2,
  domain: "ai"
},
{
  text: "Which loss function is used in regression?",
  options: ["Cross entropy", "Mean Squared Error", "Hinge loss", "Log loss"],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is feature extraction?",
  options: [
    "Removing data",
    "Selecting important attributes",
    "Model training",
    "Data labeling"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What does SVM stand for?",
  options: [
    "Simple Vector Model",
    "Support Vector Machine",
    "Standard Variable Method",
    "Supervised Vector Model"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which algorithm uses distance metrics?",
  options: ["KNN", "Naive Bayes", "Decision Tree", "Linear Regression"],
  correctIndex: 0,
  domain: "ai"
},
{
  text: "What is bias in machine learning?",
  options: [
    "Model preference error",
    "Training speed",
    "Accuracy measure",
    "Noise"
  ],
  correctIndex: 0,
  domain: "ai"
},
{
  text: "What is training data used for?",
  options: [
    "Testing model",
    "Evaluating accuracy",
    "Teaching model",
    "Deployment"
  ],
  correctIndex: 2,
  domain: "ai"
},
{
  text: "Which algorithm is probabilistic?",
  options: ["Naive Bayes", "KNN", "Decision Tree", "SVM"],
  correctIndex: 0,
  domain: "ai"
},
{
  text: "What is deep learning?",
  options: [
    "Shallow neural network",
    "Multiple-layer neural networks",
    "Rule-based system",
    "Sorting method"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which activation function outputs values between 0 and 1?",
  options: ["ReLU", "Sigmoid", "Tanh", "Softmax"],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "What is model evaluation?",
  options: [
    "Training model",
    "Testing model performance",
    "Collecting data",
    "Deploying model"
  ],
  correctIndex: 1,
  domain: "ai"
},
{
  text: "Which library is commonly used for AI in Python?",
  options: ["NumPy", "TensorFlow", "Matplotlib", "Flask"],
  correctIndex: 1,
  domain: "ai"
}

]);









db.questions.insertMany([

/* ======================= REACT (20) ======================= */

{
  text: "What is React primarily used for?",
  options: [
    "Database management",
    "Building user interfaces",
    "Server-side scripting",
    "Styling web pages"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "What is JSX in React?",
  options: [
    "A JavaScript engine",
    "A syntax extension for JavaScript",
    "A CSS framework",
    "A database query language"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "Which hook is used to manage state in a functional component?",
  options: ["useRef", "useEffect", "useState", "useMemo"],
  correctIndex: 2,
  domain: "react"
},
{
  text: "Which hook is used for side effects?",
  options: ["useState", "useEffect", "useCallback", "useContext"],
  correctIndex: 1,
  domain: "react"
},
{
  text: "What is the virtual DOM?",
  options: [
    "A copy of the real DOM",
    "A browser API",
    "A database",
    "A CSS engine"
  ],
  correctIndex: 0,
  domain: "react"
},
{
  text: "Which prop is mandatory when rendering lists in React?",
  options: ["index", "id", "key", "value"],
  correctIndex: 2,
  domain: "react"
},
{
  text: "What does lifting state up mean?",
  options: [
    "Moving state to parent component",
    "Deleting state",
    "Using Redux",
    "Using hooks"
  ],
  correctIndex: 0,
  domain: "react"
},
{
  text: "Which hook helps memoize a function?",
  options: ["useMemo", "useCallback", "useEffect", "useReducer"],
  correctIndex: 1,
  domain: "react"
},
{
  text: "What is a controlled component?",
  options: [
    "Component controlled by browser",
    "Component controlled by state",
    "Component without props",
    "Component with refs"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "Which hook is used to access context?",
  options: ["useState", "useEffect", "useContext", "useRef"],
  correctIndex: 2,
  domain: "react"
},
{
  text: "What does React.memo do?",
  options: [
    "Stores state",
    "Prevents unnecessary re-renders",
    "Handles side effects",
    "Manages routing"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "Which lifecycle method runs after first render (class component)?",
  options: [
    "componentWillMount",
    "componentDidMount",
    "componentDidUpdate",
    "render"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "What is prop drilling?",
  options: [
    "Passing props deeply",
    "Removing props",
    "Using context",
    "Using Redux"
  ],
  correctIndex: 0,
  domain: "react"
},
{
  text: "Which library is commonly used for routing in React?",
  options: ["Axios", "Redux", "React Router", "Next.js"],
  correctIndex: 2,
  domain: "react"
},
{
  text: "What does useRef primarily store?",
  options: [
    "Derived state",
    "Mutable values",
    "Props",
    "Side effects"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "What is reconciliation in React?",
  options: [
    "Updating CSS",
    "Diffing virtual DOM",
    "Routing pages",
    "Fetching data"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "Which hook replaces componentDidUpdate?",
  options: ["useState", "useEffect", "useMemo", "useReducer"],
  correctIndex: 1,
  domain: "react"
},
{
  text: "What is the default behavior of React state updates?",
  options: [
    "Synchronous",
    "Asynchronous",
    "Blocking",
    "Parallel"
  ],
  correctIndex: 1,
  domain: "react"
},
{
  text: "Which tool is used to manage global state?",
  options: ["Redux", "Axios", "Jest", "Webpack"],
  correctIndex: 0,
  domain: "react"
},
{
  text: "What is conditional rendering?",
  options: [
    "Rendering once",
    "Rendering based on condition",
    "Rendering without JSX",
    "Rendering server-side"
  ],
  correctIndex: 1,
  domain: "react"
},

/* ======================= MERN (15) ======================= */

{
  text: "What does MERN stand for?",
  options: [
    "MongoDB, Express, React, Node",
    "MySQL, Express, React, Node",
    "MongoDB, Ember, React, Node",
    "MongoDB, Express, Redux, Node"
  ],
  correctIndex: 0,
  domain: "mern"
},
{
  text: "Which database is used in MERN stack?",
  options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  correctIndex: 2,
  domain: "mern"
},
{
  text: "Which framework is used on backend in MERN?",
  options: ["Django", "Spring", "Express", "Flask"],
  correctIndex: 2,
  domain: "mern"
},
{
  text: "What is Node.js?",
  options: [
    "JavaScript framework",
    "JavaScript runtime",
    "Database",
    "Frontend library"
  ],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "Which component handles HTTP requests in MERN backend?",
  options: ["React", "MongoDB", "Express", "Redux"],
  correctIndex: 2,
  domain: "mern"
},
{
  text: "What is Mongoose used for?",
  options: [
    "Routing",
    "ODM for MongoDB",
    "UI design",
    "Authentication"
  ],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "Which command starts a Node server?",
  options: ["node index.js", "npm build", "npm install", "start server"],
  correctIndex: 0,
  domain: "mern"
},
{
  text: "What is REST API?",
  options: [
    "Database protocol",
    "Stateless communication standard",
    "UI pattern",
    "Authentication method"
  ],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "Which HTTP method is used to create data?",
  options: ["GET", "POST", "PUT", "DELETE"],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "What does middleware do in Express?",
  options: [
    "Handles database",
    "Processes request/response",
    "Renders UI",
    "Starts server"
  ],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "Which format is commonly used for API responses?",
  options: ["XML", "JSON", "HTML", "CSV"],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "What is JWT used for?",
  options: [
    "Styling",
    "Authentication",
    "Database queries",
    "Routing"
  ],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "Which library is used for HTTP calls in React?",
  options: ["Axios", "Express", "Mongoose", "JWT"],
  correctIndex: 0,
  domain: "mern"
},
{
  text: "What is CORS?",
  options: [
    "Database feature",
    "Browser security mechanism",
    "React hook",
    "Node module"
  ],
  correctIndex: 1,
  domain: "mern"
},
{
  text: "Which port does Node commonly run on?",
  options: ["80", "3000", "443", "21"],
  correctIndex: 1,
  domain: "mern"
},

/* ======================= FLUTTER (15) ======================= */

{
  text: "Which language is used to write Flutter apps?",
  options: ["Java", "Kotlin", "Dart", "Swift"],
  correctIndex: 2,
  domain: "flutter"
},
{
  text: "What is Flutter mainly used for?",
  options: [
    "Backend development",
    "Mobile UI development",
    "Database design",
    "Game engine"
  ],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "What is a widget in Flutter?",
  options: [
    "Function",
    "UI component",
    "Database",
    "Service"
  ],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "Which widget has mutable state?",
  options: ["StatelessWidget", "StatefulWidget", "InheritedWidget", "Container"],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "What is hot reload?",
  options: [
    "Restart app",
    "Update UI instantly",
    "Compile code",
    "Clear cache"
  ],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "Which widget is used for layout?",
  options: ["Row", "Text", "Icon", "Image"],
  correctIndex: 0,
  domain: "flutter"
},
{
  text: "Which company developed Flutter?",
  options: ["Meta", "Microsoft", "Google", "Apple"],
  correctIndex: 2,
  domain: "flutter"
},
{
  text: "Which widget allows scrolling?",
  options: ["Column", "Row", "ListView", "Container"],
  correctIndex: 2,
  domain: "flutter"
},
{
  text: "What does Scaffold provide?",
  options: [
    "App structure",
    "Routing",
    "Database",
    "Authentication"
  ],
  correctIndex: 0,
  domain: "flutter"
},
{
  text: "Which widget is immutable?",
  options: ["StatefulWidget", "StatelessWidget", "StreamBuilder", "FutureBuilder"],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "What is pubspec.yaml used for?",
  options: [
    "UI layout",
    "Dependency management",
    "Routing",
    "State management"
  ],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "Which widget handles gestures?",
  options: ["GestureDetector", "Text", "Row", "Scaffold"],
  correctIndex: 0,
  domain: "flutter"
},
{
  text: "What is Flutter’s rendering engine?",
  options: ["Blink", "Skia", "WebKit", "V8"],
  correctIndex: 1,
  domain: "flutter"
},
{
  text: "Which widget is used for navigation?",
  options: ["Navigator", "Router", "Link", "GoRoute"],
  correctIndex: 0,
  domain: "flutter"
},
{
  text: "What type of framework is Flutter?",
  options: [
    "Hybrid",
    "Native",
    "Cross-platform",
    "Web-only"
  ],
  correctIndex: 2,
  domain: "flutter"
}

]);