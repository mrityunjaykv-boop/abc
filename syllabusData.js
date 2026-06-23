export const initialSyllabusData = {
  "cs-11": {
    "title": "Class 11 Computer Science (CS)",
    "units": [
      {
        "name": "Unit 1: Computer Systems and Organisation",
        "chapters": [
          {
            "id": "cs11_ch1",
            "title": "Basic Computer Organisation",
            "periods": 8,
            "objectives": [
              "Understand the basic architecture of a computer system.",
              "Identify the components of a CPU (ALU, CU, Registers).",
              "Differentiate between primary and secondary memory types.",
              "Explain the role of operating systems and system software."
            ],
            "methodology": [
              "Lecture with block diagrams of computer architecture.",
              "Interactive hardware demonstration (showing RAM, CPU, Hard Drive).",
              "Discussion on open-source vs. proprietary software."
            ],
            "resources": [
              "Classroom projector and presentation slides.",
              "Discarded CPU or motherboard for physical demonstration.",
              "CBSE Class 11 CS Textbook (NCERT)."
            ],
            "activities": [
              "Label the computer architecture block diagram sheet.",
              "Compare specifications of 3 different mobile/laptop configurations online."
            ],
            "assessment": [
              "10-question MCQ quiz on hardware components.",
              "Short answer questions on system software types."
            ],
            "homework": [
              "Explain the difference between RAM, ROM, and Cache memory in your own words.",
              "Research and list 3 functions of an Operating System."
            ]
          },
          {
            "id": "cs11_ch2",
            "title": "Number Systems & Boolean Logic",
            "periods": 10,
            "objectives": [
              "Convert numbers between Binary, Octal, Decimal, and Hexadecimal.",
              "Understand binary representation of integers (1's and 2's complement).",
              "Apply basic Boolean logic operations (AND, OR, NOT, NAND, NOR, XOR).",
              "Construct truth tables and simplify simple logic circuits."
            ],
            "methodology": [
              "Blackboard instructions and step-by-step conversion drills.",
              "Solving logic gate puzzle activities.",
              "Interactive truth table construction exercises."
            ],
            "resources": [
              "Whiteboard and colored markers.",
              "Worksheets with number conversion exercises.",
              "Logic gate simulator link (e.g., Logic.ly)."
            ],
            "activities": [
              "Peer-evaluation of binary-to-hexadecimal conversion worksheet.",
              "Drawing logic gate circuits for Boolean expressions: Y = AB + A'C."
            ],
            "assessment": [
              "Written test on number system conversion (15 marks).",
              "Logic gate construction practical quiz."
            ],
            "homework": [
              "Convert (234.125) decimal to binary and hexadecimal.",
              "Draw the truth table for (A + B)' and show it is equivalent to A' . B'."
            ]
          }
        ]
      },
      {
        "name": "Unit 2: Computational Thinking and Programming - 1",
        "chapters": [
          {
            "id": "cs11_ch3",
            "title": "Introduction to Python & Variables",
            "periods": 12,
            "objectives": [
              "Configure Python IDLE environment.",
              "Explain the concept of dynamic typing in Python.",
              "Use basic variables, identifiers, constants, and keywords.",
              "Understand Python basic data types: Int, Float, String, Complex, Boolean."
            ],
            "methodology": [
              "Live coding demo in Python IDLE shell.",
              "Troubleshooting syntax errors live with the class.",
              "Pair programming initial commands."
            ],
            "resources": [
              "Computer lab setup with Python 3.x installed.",
              "Syntax cheat sheets for basic data types.",
              "Code editor (IDLE/Thonny/VS Code)."
            ],
            "activities": [
              "Writing first 'Hello World' program.",
              "Create a program to accept user name, age, and marks, and print them in a formatted block."
            ],
            "assessment": [
              "Lab verification: successful script run with custom output.",
              "Short test on identifying valid/invalid identifiers."
            ],
            "homework": [
              "Write a program to calculate the area and perimeter of a rectangle.",
              "Identify the error in: 1st_value = 10, print(1st_value)."
            ]
          },
          {
            "id": "cs11_ch4",
            "title": "Flow of Control: Conditions & Loops",
            "periods": 15,
            "objectives": [
              "Implement decision-making using if, if-else, and if-elif-else statements.",
              "Analyze and apply range() function parameters.",
              "Implement iteration using for loops and while loops.",
              "Debug infinite loops and apply break & continue control structures."
            ],
            "methodology": [
              "Dry-run tracing of code snippets on the board.",
              "Gamified loop tracking exercises.",
              "Step-by-step debugger demonstration."
            ],
            "resources": [
              "Lab projector showing execution flow using Thonny visualizer.",
              "Flowchart template cards for logic exercises.",
              "Handout with 15 nested conditional coding problems."
            ],
            "activities": [
              "Build a simple text-based rock-paper-scissors game using nested conditions.",
              "Write a script to print the Fibonacci series up to N terms using a loop."
            ],
            "assessment": [
              "Practical lab test: Write a prime-number checker.",
              "Viva-voce on 'break vs continue' differences."
            ],
            "homework": [
              "Write a program to print a right-triangle pattern of stars of height H.",
              "Dry run a while loop snippet and write its output."
            ]
          },
          {
            "id": "cs11_ch5",
            "title": "Strings and Lists",
            "periods": 15,
            "objectives": [
              "Understand index structure (positive and negative indices) of sequences.",
              "Perform string operations (slicing, concatenation, repetition, membership).",
              "Utilize built-in string methods (isdigit, isalpha, split, join, replace).",
              "Manipulate lists (append, extend, insert, pop, remove, sort)."
            ],
            "methodology": [
              "Visual drawing of memory addresses/indices on blackboard.",
              "Interactive code-along sessions for list modification functions.",
              "Creating 'mini search tools' using string slicing."
            ],
            "resources": [
              "Python documentation on List and String API.",
              "Pre-written code templates for string analysis.",
              "Lab machines with Python IDEs."
            ],
            "activities": [
              "Write a function to check if a word is a palindrome.",
              "Write a program to create a shopping cart list where items can be added, updated, or removed."
            ],
            "assessment": [
              "Written quiz on list slicing outputs.",
              "Lab assignment: Extract email domain names from a comma-separated text list."
            ],
            "homework": [
              "Explain why strings are immutable while lists are mutable in Python.",
              "Write a program to replace all spaces in a string with hyphens without using replace()."
            ]
          },
          {
            "id": "cs11_ch6",
            "title": "Tuples & Dictionaries",
            "periods": 12,
            "objectives": [
              "Understand the characteristics of Tuples (immutability, speed).",
              "Create and manipulate dictionaries (key-value pairs, nested dicts).",
              "Understand dictionary methods (keys, values, items, get, update).",
              "Choose appropriate data structures based on real-world scenario requirements."
            ],
            "methodology": [
              "Comparing execution speeds of Lists vs Tuples (demo).",
              "Diagramming key-value hashing logic on the board.",
              "Coding exercises converting parallel lists to dictionaries."
            ],
            "resources": [
              "Interactive Python shells.",
              "Reference diagrams showing mapping types.",
              "NCERT exercise sheets."
            ],
            "activities": [
              "Create a phonebook lookup system using a dictionary.",
              "Write a script that counts the frequency of words in a sentence and stores it in a dictionary."
            ],
            "assessment": [
              "Short test: Write code to merge two dictionaries.",
              "Lab check: Tuple packing and unpacking exercises."
            ],
            "homework": [
              "What happens if you use a mutable object like a list as a dictionary key? Explain.",
              "Given a dictionary d = {'A': 100, 'B': 200}, write code to swap keys and values."
            ]
          }
        ]
      },
      {
        "name": "Unit 3: Society, Law and Ethics",
        "chapters": [
          {
            "id": "cs11_ch7",
            "title": "Digital Footprint & Netiquette",
            "periods": 8,
            "objectives": [
              "Define active and passive digital footprints.",
              "Practice safe and respectful online communication (netiquette).",
              "Understand data privacy, tracking mechanisms, and cookies.",
              "Analyze safety measures for social media platforms."
            ],
            "methodology": [
              "Class discussion on recent data leaks and privacy policies.",
              "Role-play of cyber-citizenship behaviors.",
              "Case studies of online behavior consequences."
            ],
            "resources": [
              "Case study articles on digital safety.",
              "Infographics explaining browser cookies.",
              "Projector for news videos."
            ],
            "activities": [
              "Search one's own name on search engines and map active/passive digital footprints.",
              "Create a digital poster outlining 'Do's and Don'ts' in online forums."
            ],
            "assessment": [
              "Group presentation evaluation (10 marks).",
              "Quiz on netiquette definitions."
            ],
            "homework": [
              "Write a short essay on the impact of target ads on personal decision making.",
              "List five rules of netiquette."
            ]
          },
          {
            "id": "cs11_ch8",
            "title": "Intellectual Property & Cyber Laws",
            "periods": 10,
            "objectives": [
              "Differentiate between Copyright, Patent, and Trademark.",
              "Analyze Software Licensing models (FOSS, Creative Commons, Proprietary).",
              "Identify types of cybercrimes (phishing, identity theft, hacking, cyberbullying).",
              "Explain the purpose of the IT Act 2000 (India)."
            ],
            "methodology": [
              "Interactive lecture illustrating licensing logos.",
              "Fictional case analysis where students play cyber-judges.",
              "Socratic debate on open-source vs proprietary software."
            ],
            "resources": [
              "Slides showing licensing terms (MIT, GNU, CC).",
              "Indian IT Act 2000 cheat sheet summary.",
              "Legal case briefs adapted for schools."
            ],
            "activities": [
              "Analyze terms of service of a popular social network to see what rights they claim on your content.",
              "Create a guide for identifying phishing emails."
            ],
            "assessment": [
              "Written test: Case-based questions on plagiarism and copyright infringement.",
              "Quiz on types of software licenses."
            ],
            "homework": [
              "Define plagiarism. List three ways to avoid it when writing a report.",
              "What is GPL? How does it differ from a MIT license?"
            ]
          }
        ]
      }
    ]
  },
  "cs-12": {
    "title": "Class 12 Computer Science (CS)",
    "units": [
      {
        "name": "Unit 1: Computational Thinking and Programming - 2",
        "chapters": [
          {
            "id": "cs12_ch1",
            "title": "Python Basics Revision & Functions",
            "periods": 15,
            "objectives": [
              "Revise basic concepts of Class 11 (Lists, Dicts, Loops).",
              "Define functions with positional, default, and keyword arguments.",
              "Understand variable scopes: Local, Global, and Nonlocal (LEGB rule).",
              "Write modular code with parameters and return values."
            ],
            "methodology": [
              "Diagnostic test review to identify learning gaps.",
              "Live coding showing parameter mutations inside functions.",
              "Dry-running scope lookup steps."
            ],
            "resources": [
              "Python compiler / IDE environment.",
              "Scope visualization diagram sheet.",
              "Practice exercises on default arguments."
            ],
            "activities": [
              "Write a program that implements a calculator using separate functions.",
              "Create a text analyzer function that accepts a string and returns counts of uppercase, lowercase, vowels, and consonants."
            ],
            "assessment": [
              "Coding test: Implementing custom functions with optional and keyword parameters.",
              "Written quiz on LEGB scope resolution."
            ],
            "homework": [
              "Explain the difference between mutable and immutable argument passing in Python.",
              "Write a function `unique_list(l)` that returns a list with unique elements of `l`."
            ]
          },
          {
            "id": "cs12_ch2",
            "title": "File Handling: Text, Binary & CSV",
            "periods": 20,
            "objectives": [
              "Perform file operations: Open, Read, Write, Append, Close.",
              "Differentiate modes ('r', 'w', 'a', 'b', '+').",
              "Read and write data in Binary files using `pickle` module (dump, load).",
              "Read and write tabular data using `csv` module (reader, writer, writerow)."
            ],
            "methodology": [
              "Compare notepad text storage vs structured records.",
              "Live demonstration of binary file serialization.",
              "Guided walk-through of handling file pathways and file-closure using `with` statement."
            ],
            "resources": [
              "Sample CSV and text datasets.",
              "Pickle module visual layout diagrams.",
              "Lab machines with IDE configurations."
            ],
            "activities": [
              "Write a Python script to search for a specific word in a text file and count its occurrences.",
              "Create a Student management database stored in a binary file where users can append records and search by Roll Number."
            ],
            "assessment": [
              "Lab exam: Write a script to filter rows in a CSV file and output matching ones.",
              "Viva on pickling vs unpickling."
            ],
            "homework": [
              "Why is it recommended to close a file after operations? Describe `with` block usage.",
              "Write a python program to copy content of one text file to another, skipping lines starting with '#'."
            ]
          },
          {
            "id": "cs12_ch3",
            "title": "Data Structures: Stack",
            "periods": 12,
            "objectives": [
              "Understand Linear Data structures (Lists vs Stacks).",
              "Implement Stack operations: PUSH and POP using Lists.",
              "Understand stack overflow and underflow conditions.",
              "Solve applications of stack (infix to postfix, reversal)."
            ],
            "methodology": [
              "Physical demo using stack of books or plates.",
              "Algorithm visualization using animation slides.",
              "Group practice in drawing stack states after operations."
            ],
            "resources": [
              "Animation software or slides showing stack state transitions.",
              "Lab system code templates.",
              "Board diagram templates."
            ],
            "activities": [
              "Implement a menu-driven program in Python for custom Stack operations (Push, Pop, Peek, Display).",
              "Write a function that reverses a string using a stack structure."
            ],
            "assessment": [
              "Lab verification: Complete menu-driven stack operations implementation.",
              "Short test: Draw stack diagram for values pushed and popped sequentially."
            ],
            "homework": [
              "Explain LIFO concept with two real-world examples.",
              "Write the POP algorithm/function in Python checking for Underflow."
            ]
          }
        ]
      },
      {
        "name": "Unit 2: Computer Networks",
        "chapters": [
          {
            "id": "cs12_ch4",
            "title": "Network Topologies, Types & Media",
            "periods": 12,
            "objectives": [
              "Differentiate between PAN, LAN, MAN, WAN networks.",
              "Evaluate Topologies: Bus, Star, Tree, Mesh, Ring.",
              "Compare Guided Transmission Media (twisted pair, coaxial, fiber-optics).",
              "Evaluate Unguided Media (infrared, radio wave, microwave, satellite)."
            ],
            "methodology": [
              "Use diagrams and physical wires to show layouts.",
              "Comparative study project assignments.",
              "Video clips explaining fiber-optic light propagation."
            ],
            "resources": [
              "Cables (Ethernet, Coaxial).",
              "Classroom projector and network slides.",
              "Case studies of company building wiring designs."
            ],
            "activities": [
              "Design a networking layout map for a multi-building school campus to maximize speeds and minimize cost.",
              "Research and document current 5G frequency spectrum and bands."
            ],
            "assessment": [
              "Case study written question solving (CBSE style 5-mark question).",
              "Group presentation on unguided media."
            ],
            "homework": [
              "Which transmission medium is best suited for high-speed, long-distance communication? Why?",
              "Define Star Topology. Write one advantage and one disadvantage."
            ]
          },
          {
            "id": "cs12_ch5",
            "title": "Network Devices & Protocols",
            "periods": 13,
            "objectives": [
              "Explain functions of Modem, Hub, Switch, Repeater, Router, Gateway.",
              "Understand protocol structures: TCP/IP, HTTP, HTTPS, FTP, SMTP, POP3.",
              "Understand URL, Domain names, IP Address structure (IPv4 vs IPv6).",
              "Compare packet switching vs circuit switching."
            ],
            "methodology": [
              "Simulated animation of packet delivery routing.",
              "Analyzing actual IP details in the computer lab Command Prompt (ipconfig).",
              "Analogy comparisons (IP to postal address)."
            ],
            "resources": [
              "Router and switch to show ports in lab.",
              "Internet access to trace IP addresses.",
              "Worksheets mapping protocols to usage."
            ],
            "activities": [
              "Open terminal on lab system and run `ping` and `tracert` commands to analyze connections.",
              "Create a layout mapping network components for a bank server."
            ],
            "assessment": [
              "Written exam covering protocol acronyms and device differences.",
              "Practical quiz: identify network device from its description."
            ],
            "homework": [
              "Explain the difference between Hub and Switch.",
              "How does HTTPS differ from HTTP? What protocol does HTTPS use for security?"
            ]
          }
        ]
      },
      {
        "name": "Unit 3: Database Management",
        "chapters": [
          {
            "id": "cs12_ch6",
            "title": "SQL Concepts & Commands",
            "periods": 15,
            "objectives": [
              "Understand Relational Database concepts (Table, Attribute, Tuple, Domain).",
              "Identify Candidate Key, Primary Key, Alternate Key, Foreign Key.",
              "Write DDL commands: CREATE DATABASE, CREATE TABLE, ALTER TABLE, DROP TABLE.",
              "Write DML commands: INSERT, UPDATE, DELETE, SELECT with WHERE, ORDER BY, GROUP BY."
            ],
            "methodology": [
              "Live queries inside MySQL/SQLite command line.",
              "Diagramming relationships between keys on the board.",
              "Interactive syntax structure drills."
            ],
            "resources": [
              "MySQL Server or SQLite installed on lab PCs.",
              "SQL command syntax cheat sheet.",
              "Sample databases (e.g. Employee table, Student table)."
            ],
            "activities": [
              "Write SQL scripts to create a Library database schema.",
              "Perform SELECT queries with complex conditions (AND, OR, BETWEEN, LIKE '%a%')."
            ],
            "assessment": [
              "Lab query test (15 marks): write SQL queries for a given schema.",
              "Written questions on mapping SQL concepts."
            ],
            "homework": [
              "Define Foreign Key. How does it maintain referential integrity?",
              "What is the difference between ALTER and UPDATE commands?"
            ]
          },
          {
            "id": "cs12_ch7",
            "title": "Advanced SQL & Database Connectivity",
            "periods": 15,
            "objectives": [
              "Aggregate functions: SUM, AVG, MIN, MAX, COUNT.",
              "Write query blocks with GROUP BY and HAVING clauses.",
              "Perform Cartesian Product and Equi-Join operations on two tables.",
              "Establish database connectivity between Python and MySQL using `connector`."
            ],
            "methodology": [
              "Visual drawing of table joining operations.",
              "Tracing data from SQL server to Python variable outputs.",
              "Code-along debug sessions for connector setup."
            ],
            "resources": [
              "Python environment with `mysql-connector-python` package.",
              "Multi-table sample database schema.",
              "Connectivity troubleshooting manuals."
            ],
            "activities": [
              "Run join queries across Student and Department tables.",
              "Write a complete Python script to fetch records from a MySQL database and display them in formatted tabular form on console."
            ],
            "assessment": [
              "Practical exam: Implement database connection, insertion, and retrieval via Python.",
              "Viva on difference between WHERE and HAVING."
            ],
            "homework": [
              "Write queries to find departments with average salary > 50000 using GROUP BY and HAVING.",
              "List the functions of `cursor()` and `commit()` in Python SQL connectivity."
            ]
          }
        ]
      }
    ]
  },
  "ip-11": {
    "title": "Class 11 Informatics Practices (IP)",
    "units": [
      {
        "name": "Unit 1: Introduction to Computer System",
        "chapters": [
          {
            "id": "ip11_ch1",
            "title": "Computer System & Memory Types",
            "periods": 10,
            "objectives": [
              "Identify components of computer system.",
              "Differentiate primary storage (RAM, ROM) from secondary storage (HDD, SSD).",
              "Understand units of data measurement (KB, MB, GB, TB, PB).",
              "Distinguish proprietary, freeware, and open source software."
            ],
            "methodology": [
              "Lectures supported by hardware slides.",
              "Memory capacity calculations drills.",
              "Product taxonomy tables analysis."
            ],
            "resources": [
              "PowerPoint presentation slides.",
              "Sample SSD, HDD drives.",
              "CBSE IP Class 11 Textbook."
            ],
            "activities": [
              "Calculate file storage limits (e.g. how many 4MB songs fit in 64GB flash drive).",
              "Categorize a list of 15 softwares into system, application, or utility software."
            ],
            "assessment": [
              "Written test on memory calculations and software classifications.",
              "Quiz on hardware blocks."
            ],
            "homework": [
              "Define cache memory. Why is it faster than RAM?",
              "Convert 2 TB into Kilobytes. Show calculation."
            ]
          }
        ]
      },
      {
        "name": "Unit 2: Introduction to Python",
        "chapters": [
          {
            "id": "ip11_ch2",
            "title": "Python Programming Fundamentals",
            "periods": 15,
            "objectives": [
              "Write basic Python expressions.",
              "Employ correct operators (Arithmetic, Relational, Logical, Assignment).",
              "Define variables and read user input using input().",
              "Apply type conversion functions: int(), float(), str()."
            ],
            "methodology": [
              "Interactive coding in Python shell.",
              "Debugging common syntax error scenarios.",
              "Arithmetic expression matching exercises."
            ],
            "resources": [
              "Python environment (IDLE / Jupyter / Thonny).",
              "Operator precedence reference chart.",
              "Short assignments worksheet."
            ],
            "activities": [
              "Create a program to convert temperature from Fahrenheit to Celsius.",
              "Write a program to calculate Simple Interest based on user inputs."
            ],
            "assessment": [
              "Lab verification: simple mathematical program implementation.",
              "Short quiz on Python operator precedence."
            ],
            "homework": [
              "What is the output of `print(11 // 3, 11 % 3, 2 ** 3)`? Explain.",
              "Write a script that takes the radius of a circle and outputs its perimeter."
            ]
          },
          {
            "id": "ip11_ch3",
            "title": "Control Structures & Python Sequences",
            "periods": 20,
            "objectives": [
              "Apply conditional paths (if-else, nested if).",
              "Implement loops (for, while) to iterate computations.",
              "Understand List creation, access, slicing, and methods.",
              "Create and query Dictionary keys and values."
            ],
            "methodology": [
              "Visual trace diagrams of conditional flow.",
              "List index visualization.",
              "Hands-on program building in the computer lab."
            ],
            "resources": [
              "Code templates for lists and dictionaries.",
              "Debugging guides.",
              "Projector setup."
            ],
            "activities": [
              "Write an automated grading script mapping mark ranges to grades.",
              "Create a glossary dictionary program allowing searches for computer definitions."
            ],
            "assessment": [
              "Lab practical: write a loop to print multiplication table.",
              "Written questions on list slicing index calculation."
            ],
            "homework": [
              "Write a program that prints even numbers from 1 to 50 using a loop.",
              "Explain the difference between `list.append(x)` and `list.extend(x)`."
            ]
          }
        ]
      },
      {
        "name": "Unit 3: Database Concepts and SQL",
        "chapters": [
          {
            "id": "ip11_ch4",
            "title": "RDBMS Concepts & SQL Statements",
            "periods": 20,
            "objectives": [
              "Understand tables, primary keys, and data integrity.",
              "Configure MySQL tables using correct datatypes (CHAR, VARCHAR, INT, DATE).",
              "Execute basic SQL commands: SELECT, INSERT, UPDATE, DELETE.",
              "Perform query filters using WHERE, BETWEEN, IN, LIKE."
            ],
            "methodology": [
              "Database table mapping on whiteboard.",
              "Live query runs on lab SQL servers.",
              "Query transformation syntax matching exercises."
            ],
            "resources": [
              "MySQL Server / XAMPP package.",
              "SQL data types card guide.",
              "Workbook of query exercises."
            ],
            "activities": [
              "Design table structure for school exam scores.",
              "Write SELECT queries to extract lists of student names matching specified conditions."
            ],
            "assessment": [
              "Practical quiz: write SQL statements for a mock schema.",
              "Viva on VARCHAR vs CHAR types."
            ],
            "homework": [
              "What is the difference between Primary Key and Unique constraint?",
              "Write the SQL command to delete records of students who failed (marks < 33)."
            ]
          }
        ]
      },
      {
        "name": "Unit 4: Emerging Trends",
        "chapters": [
          {
            "id": "ip11_ch5",
            "title": "Emerging Technology Trends",
            "periods": 10,
            "objectives": [
              "Explain concepts of Artificial Intelligence, Machine Learning, Deep Learning.",
              "Identify Internet of Things (IoT) sensors and smart grid technologies.",
              "Differentiate Cloud Computing service models (SaaS, PaaS, IaaS).",
              "Analyze Blockchain ledger principles."
            ],
            "methodology": [
              "Seminar presentation of cutting edge technologies.",
              "Multimedia case study reviews.",
              "Class discussion on cloud tools."
            ],
            "resources": [
              "Reference articles on machine learning use-cases.",
              "Videos on IoT devices and Blockchain nodes.",
              "Presentation slides."
            ],
            "activities": [
              "Write a comparative analysis summary comparing Google Drive, Github, and AWS in cloud category layers.",
              "Draft a hypothetical project using IoT sensors to manage smart streetlights in a city."
            ],
            "assessment": [
              "Presentation delivery evaluation.",
              "Objective MCQ quiz on cloud models."
            ],
            "homework": [
              "Define SaaS. List two real-world examples.",
              "How does Blockchain secure transaction records against alteration?"
            ]
          }
        ]
      }
    ]
  },
  "ip-12": {
    "title": "Class 12 Informatics Practices (IP)",
    "units": [
      {
        "name": "Unit 1: Data Handling using Pandas and Data Visualization",
        "chapters": [
          {
            "id": "ip12_ch1",
            "title": "Pandas Series & Operations",
            "periods": 15,
            "objectives": [
              "Create Pandas Series from arrays, dictionaries, and scalar values.",
              "Apply indexing and slicing to Series.",
              "Understand Series attributes: index, values, dtype, size, empty.",
              "Perform mathematical operations on Series including alignment and handling of NaN."
            ],
            "methodology": [
              "Live coding in Jupyter notebook.",
              "Compare Python list structures vs Pandas Series vectorized speeds.",
              "Trace NaN propagation logic."
            ],
            "resources": [
              "Jupyter Notebook workspace.",
              "Pandas cheat sheet.",
              "Structured datasets."
            ],
            "activities": [
              "Create a Series representing monthly sales data and calculate average and growth indices.",
              "Write script to filter indices with values greater than 50 from a Series."
            ],
            "assessment": [
              "Lab test: Write script creating custom Series according to instructions.",
              "Short test: Write output of algebraic operations on misaligned series."
            ],
            "homework": [
              "What is NaN? How does Pandas handle mathematical operations involving NaN?",
              "Describe the differences in index slicing behavior between default integer indices and label indices."
            ]
          },
          {
            "id": "ip12_ch2",
            "title": "Pandas DataFrames",
            "periods": 25,
            "objectives": [
              "Construct DataFrames using dictionaries of lists, lists of dicts, Series, and 2D arrays.",
              "Perform selections using loc, iloc, and boolean indexing.",
              "Modify DataFrames: Add/delete columns, edit cells, append rows.",
              "Import and export datasets using `read_csv()` and `to_csv()` functions."
            ],
            "methodology": [
              "Draw DataFrame coordinate grids to illustrate selection methods.",
              "Interactive code-alongs manipulating real dataset files.",
              "Troubleshooting file system path issues in CSV read scripts."
            ],
            "resources": [
              "Real CSV database files (sales, census, school grades).",
              "Visual slides showing loc vs iloc cell range selection.",
              "Jupyter environments."
            ],
            "activities": [
              "Import a country-population CSV dataset, filter for countries in Asia, and compute the total population.",
              "Design a program to add a calculated column 'Total Marks' to a Student DataFrame."
            ],
            "assessment": [
              "Practical exam: Read custom CSV, manipulate columns, filter rows, and output to a new CSV.",
              "Viva on loc vs iloc selection criteria."
            ],
            "homework": [
              "Explain the difference between `df.drop()` and Python `del df[col]`.",
              "Write python code to load `data.csv` and show the first 7 rows."
            ]
          },
          {
            "id": "ip12_ch3",
            "title": "Data Visualization using Matplotlib",
            "periods": 15,
            "objectives": [
              "Generate Line charts, Bar charts, and Histograms using Matplotlib.",
              "Configure plot components: title, labels, legends, grid lines, and line styles.",
              "Compare data distribution representations across visual models.",
              "Export charts to external image files."
            ],
            "methodology": [
              "Graph plotting tutorials using coordinate examples.",
              "Interactive workshop modifying chart design parameters.",
              "Critiquing charts for clarity and visual layout rules."
            ],
            "resources": [
              "Matplotlib documentation guides.",
              "Python coding terminals.",
              "Data tables suitable for graphing."
            ],
            "activities": [
              "Plot double bar charts comparing annual scores of two schools.",
              "Generate a histogram representing student score distributions."
            ],
            "assessment": [
              "Lab assignment: Write script rendering styled multi-line chart with legend.",
              "Written questions on mapping graph inputs to code commands."
            ],
            "homework": [
              "Write SQL query or Python code showing parameter names required to add gridlines and custom colors to a bar chart.",
              "What is the function of `plt.show()` vs `plt.savefig()`?"
            ]
          }
        ]
      },
      {
        "name": "Unit 2: Database Query using SQL",
        "chapters": [
          {
            "id": "ip12_ch4",
            "title": "SQL Functions & Grouping",
            "periods": 15,
            "objectives": [
              "Utilize Math functions (POWER, ROUND, TRUNCATE).",
              "Utilize String functions (LCASE, UCASE, SUBSTR, LENGTH, INSTR, LTRIM, RTRIM, TRIM).",
              "Utilize Date functions (NOW, DATE, MONTH, MONTHNAME, YEAR, DAY, DAYNAME).",
              "Group aggregate records using GROUP BY and HAVING clauses."
            ],
            "methodology": [
              "Practical workshops querying values on SQL terminals.",
              "Step-by-step group filters diagram explanations.",
              "Blackboard syntax correction quizzes."
            ],
            "resources": [
              "MySQL Workbench client.",
              "Function reference lists.",
              "Pre-populated databases."
            ],
            "activities": [
              "Format invoice dates and customer names using SQL string and date functions.",
              "Query a store database to list departments where aggregate sales exceed $10,000."
            ],
            "assessment": [
              "Written exam: output prediction questions for SQL functions.",
              "Practical lab test on multi-criteria aggregation queries."
            ],
            "homework": [
              "Differentiate between `ROUND(45.289, 1)` and `TRUNCATE(45.289, 1)`.",
              "Explain how HAVING is different from WHERE with an example query."
            ]
          },
          {
            "id": "ip12_ch5",
            "title": "Operations on Relations & Joins",
            "periods": 10,
            "objectives": [
              "Understand Union, Intersection, and Minus set operations.",
              "Differentiate between Cartesian Product and Equi-Join.",
              "Query information spanning multiple tables using Joins.",
              "Maintain referential integrity relationships across DB schema."
            ],
            "methodology": [
              "Venn diagram drawings of set operations.",
              "Live query tracing mapping column headers from separate tables.",
              "Socratic question blocks on schema links."
            ],
            "resources": [
              "Relational databases with primary-foreign key linkages.",
              "Venn diagram slides.",
              "Join diagram reference materials."
            ],
            "activities": [
              "Run query linking 'Sales' and 'Salesperson' tables using EmployeeID to find total orders handled.",
              "Write relational logic statements outputting employee records alongside department locations."
            ],
            "assessment": [
              "SQL exam: write queries to join two tables and filter results.",
              "Viva on Cartesian product card multiplier calculation."
            ],
            "homework": [
              "If table A has 4 rows and table B has 3 rows, how many rows will be in their Cartesian Product? Why?",
              "Write SQL command to display Student Name (from Student table) and Stream Name (from Stream table) using common StreamID."
            ]
          }
        ]
      },
      {
        "name": "Unit 3: Introduction to Computer Networks",
        "chapters": [
          {
            "id": "ip12_ch6",
            "title": "Computer Networks & Web Services",
            "periods": 12,
            "objectives": [
              "Understand LAN, WAN, topologies, and transmission media.",
              "Differentiate Web vs Internet, HTML, XML, Domain names.",
              "Understand URL, DNS resolution steps, and basic web hosting concepts.",
              "Examine communication protocols (HTTP, FTP, VoIP)."
            ],
            "methodology": [
              "Network path diagrams showing packet pathways.",
              "DNS lookup process trace mapping exercises.",
              "Case discussions on website setup."
            ],
            "resources": [
              "Network diagrams slides.",
              "Browser developer tools to view network requests.",
              "Reference handbook chapters."
            ],
            "activities": [
              "Inspect web HTTP request headers using Chrome DevTools.",
              "Draw diagram of DNS request resolution from laptop to root server."
            ],
            "assessment": [
              "Written questions on networking definitions and protocol features.",
              "Short test on web terminologies."
            ],
            "homework": [
              "What is DNS? Briefly explain its working.",
              "Explain the difference between URL and IP Address."
            ]
          }
        ]
      },
      {
        "name": "Unit 4: Societal Impacts",
        "chapters": [
          {
            "id": "ip12_ch7",
            "title": "Societal Impacts & Cyber Ethics",
            "periods": 8,
            "objectives": [
              "Define Net Etiquette, Cyber Bullying, Phishing, Spamming.",
              "Understand Intellectual Property Rights, Copyright, Patents, Trademarks.",
              "Understand Open Source Software licenses (GPL, CC, etc.).",
              "Understand proper E-Waste disposal practices and Green Computing."
            ],
            "methodology": [
              "Class debates on digital ethics.",
              "Reviewing case-studies of copyright issues.",
              "Analysing computer hardware lifecycle statistics."
            ],
            "resources": [
              "Articles detailing licensing cases.",
              "Guidelines for proper e-waste disposal.",
              "Documentary clips on e-waste landfills."
            ],
            "activities": [
              "Research and document school e-waste policy guidelines.",
              "Write case analysis on copyright violation in media sampling."
            ],
            "assessment": [
              "Written exam covering licensing and ethical dilemma scenarios.",
              "Presentation on Green Computing tips in schools."
            ],
            "homework": [
              "What is e-waste? What are the hazards of improper e-waste disposal?",
              "What is Creative Commons? How does it differ from copyright?"
            ]
          }
        ]
      }
    ]
  }
};
