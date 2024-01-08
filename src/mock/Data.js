export const questions = [
  {
    question: {
      questionId: 1,
      title: "How to convert string to string array?",
      questionDescription:
        "I am trying to convert string to string array, is there any built in function?",
      codeSnippet: "string = name",
      userId: 1234,
      userName: "testName",
      anonymousFlag: "N",
      questionStatus: "closed",
      createdOn: "2019-10-11T13:33:05.673",
      modifiedOn: "2019-10-12T13:33:05.673",
      tags: [
        {
          tagId: 1,
          tagName: "data type",
        },
        {
          tagId: 2,
          tagName: "type conversion",
        },
      ],
    },
    comments: [
      {
        commentId: 23,
        userId: "01243",
        userName: "testName",
        createdOn: "2019-10-11T13:33:05.673",
        modifiedOn: "2019-10-12T13:33:05.673",
        anonymousFlag: "N",
        commentDescription: "Can you elaborate your question please?",
      },
      {
        commentId: 22,
        userId: "0123",
        userName: "testName",
        createdOn: "2019-10-11T13:33:05.673",
        modifiedOn: "2019-10-12T13:33:05.673",
        anonymousFlag: "N",
        commentDescription:
          "Do you want to convert the entire word name as an array?",
      },
    ],
    answers: [
      {
        answerId: 0,
        answerDescription: "first answer",
        codeSnippet: "test",
        userId: 123,
        userName: "testName",
        anonymousFlag: "N",
        createdOn: "2019-10-11T13:33:05.673",
        modifiedOn: "2019-10-12T13:33:05.673",
      },
      {
        answerId: 1,
        answerDescription: "second answer",
        codeSnippet: "test",
        userId: 234,
        userName: "testName",
        anonymousFlag: "N",
        createdOn: "2019-10-15T13:33:05.673",
        modifiedOn: "2019-10-12T13:33:05.673",

        comments: [
          {
            commentId: 22,
            userId: 234,
            userName: "testName",
            createdOn: "2019-11-11T13:33:05.673",
            modifiedOn: "2019-10-12T13:33:05.673",
            anonymousFlag: "Y",
            commentDescription: "Can you elaborate your question please?",
          },
          {
            commentId: 23,
            userId: 235,
            userName: "testName",
            createdOn: "2019-10-12T13:33:05.673",
            modifiedOn: "2019-10-12T13:33:05.673",
            anonymousFlag: "N",
            commentDescription:
              "Do you want to convert the entire word name as an array?",
          },
        ],
      },
    ],
  },
];

export const tags = [
  {
    tagId: 1,
    tagName: "JavaScript",
    tagInfo: `<p>
    For questions about programming in ECMAScript (JavaScript/JS) and its
    different dialects/implementations (except for ActionScript). Note
    that JavaScript is NOT Java. Include all tags that are relevant to
    your question: e.g., [node.js], [jQuery], [JSON], [ReactJS],
    [angular], [ember.js], [vue.js], [typescript], [svelte], etc.
  </p>`,
    tagDescription: `
    <p>
      <a href="https://en.wikipedia.org/wiki/JavaScript" target="_self">
        <strong>JavaScript</strong>
      </a>
      (a dialect of ECMAScript) is a high-level, dynamic, multi-paradigm,
      object-oriented,
      <a
        href="https://en.wikipedia.org/wiki/Prototype-based_programming"
        target="_self"
      >
        prototype-based
      </a>
      , weakly-typed, and interpreted language traditionally used for
      client-side scripting in web browsers. JavaScript can also be run
      outside the browser using a framework like Node.js, Nashorn, Wakanda,
      or Google Apps Script. Despite the name, it is unrelated to the
      <a
        href="https://en.wikipedia.org/wiki/Java_programming_language"
        target="_self"
      >
        Java programming language
      </a>
      and shares only superficial similarities.
    </p>
    <h2>When asking a JavaScript question, you should:</h2>
    <ol>
      <li>
        Debug your JavaScript code (see
        <a
          href="https://www.creativebloq.com/javascript/javascript-debugging-beginners-3122820"
          target="_self"
        >
          Creativebloq
        </a>
        ,
        <a
          href="https://developer.mozilla.org/en-US/docs/Tools/Debugger"
          target="_self"
        >
          MDN
        </a>
        ,
        <a
          href="https://developers.google.com/chrome-developer-tools/docs/javascript-debugging"
          target="_self"
        >
          Google
        </a>
        , &amp;
        <a
          href="https://msdn.microsoft.com/en-us/library/gg699336(v=vs.85).aspx"
          target="_self"
        >
          MSDN
        </a>
        ).
      </li>
      <li>
        Isolate the problematic code and reproduce it in a
        <a
          href="https://blog.stackoverflow.com/2014/09/introducing-runnable-javascript-css-and-html-code-snippets/"
          target="_self"
        >
          <strong>Stack Overflow code snippet</strong>
        </a>
        or an external online environment such as
        <a href="https://jsfiddle.net/" target="_self">
          <strong>JSFiddle</strong>
        </a>
        ,
        <a href="https://jsbin.com/" target="_self">
          <strong>JS Bin</strong>
        </a>
        or
        <a href="https://pastebin.com/" target="_self">
          <strong>PasteBin</strong>
        </a>
        (remember to also include the code in the question itself). When
        possible, prefer to use Stack Overflow code snippets over external
        sites.
      </li>
      <li>
        If a library or framework is used, then tag the question with the
        appropriate tags:
        <a
          href="https://stackoverflow.com/questions/tagged/jquery"
          target="_self"
        >
          jquery
        </a>
        for jQuery,
        <a
          href="https://stackoverflow.com/questions/tagged/prototypejs"
          target="_self"
        >
          prototypejs
        </a>
        for Prototype,
        <a
          href="https://stackoverflow.com/questions/tagged/mootools"
          target="_self"
        >
          mootools
        </a>
        for MooTools, and so on. However, if a framework is not used or
        necessary, do not include these tags.
      </li>
      <li>
        If the issue is client-side, mention which browser the code is
        having problems on, and what error messages, if any, were thrown by
        the browser. Use the Developer Tools for your browser (see "Useful
        Tools" below) to see these messages. If the question is
        browser-specific, use tags
        <a
          href="https://stackoverflow.com/questions/tagged/firefox"
          target="_self"
        >
          firefox
        </a>
        ,
        <a
          href="https://stackoverflow.com/questions/tagged/google-chrome"
          target="_self"
        >
          google-chrome
        </a>
        ,
        <a
          href="https://stackoverflow.com/questions/tagged/internet-explorer"
          target="_self"
        >
          internet-explorer
        </a>
        ,
        <a
          href="https://stackoverflow.com/questions/tagged/opera"
          target="_self"
        >
          opera
        </a>
        ,
        <a
          href="https://stackoverflow.com/questions/tagged/safari"
          target="_self"
        >
          safari
        </a>
        ,
        <a
          href="https://stackoverflow.com/questions/tagged/microsoft-edge"
          target="_self"
        >
          microsoft-edge
        </a>
        ,
        <a
          href="https://stackoverflow.com/questions/tagged/opera-mini"
          target="_self"
        >
          opera-mini
        </a>
        etc.
      </li>
      <li>
        Only tag the question as
        <a
          href="https://stackoverflow.com/questions/tagged/css"
          target="_self"
        >
          css
        </a>
        or
        <a
          href="https://stackoverflow.com/questions/tagged/html"
          target="_self"
        >
          html
        </a>
        if you are asking about an issue that concerns the combination of
        one of those with JavaScript and could only be answered with
        information specifically regarding either of those subjects.
      </li>
    </ol>
    <p>
      <em>
        Note: Unless a tag for a framework or library is also included, a
        pure JavaScript answer is expected for questions with the
      </em>
      <a
        href="https://stackoverflow.com/questions/tagged/javascript"
        target="_self"
      >
        <em>javascript</em>
      </a>
      <em> tag.</em>
    </p>`,
  },
  {
    tagId: 2,
    tagName: "python",
    tagInfo: `<p>
    Python is a dynamically typed, multi-purpose programming language. It is
    designed to be quick to learn, understand, and use, and enforces a clean
    and uniform syntax. Please note that Python 2 is officially out of
    support as of 2020-01-01. For version-specific Python questions, add the
    [python-2.7] or [python-3.x] tag. When using a Python variant (e.g.
    Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the
    tags.
  </p>`,
    tagDescription: ` 
    <p>
      <a href="https://www.python.org/" target="_self">
        <strong>Python</strong>
      <
      is an <em>interpreted</e
      <em>interactive, object-oriented (using </em>
      <a
        href="https://docs.python.org/3/tutorial/classes.html"
        target="_self"
      >
        <em>classes</em>
      </a>
      <em>)</e
      <a
        href="https://wiki.python.org/moin/Why%20is%20Python%20a%20dynamic%20language%20and%20also%20a%20strongly%20typed%20language"
        target="_self"
      >
        dynamic and strongly typed
      <
      programming language that is used 
      <a href="https://www.python.org/about/apps" target="_self">
        a wide range of applications
      </a>
      . It incorporates modules, exceptions, dynamic typing, very high-level
      dynamic data types, and classes. Python combines remarkable power with
      very clear syntax. It has interfaces to many system calls and
      libraries, as well as to various window systems, and is extensible
      <a href="https://stackoverflow.com/questions/tagged/c" target="_self">
        c
      <
    
      <a
        href="https://stackoverflow.com/questions/tagged/c%2b%2b"
        target="_self"
      >
        c++
      </a>
      . It is also usable as an extension language for applications that
      need a programmable interface. Finally, Python is portable: it runs on
      many Unix variants, on the Mac, and on Windows 2000 and later.
    </p>
    <p>
      The language comes with a large standard library that covers areas
      such as string processing (regular expressions, Unicode, calculating
      differences between files), Internet protocols (HTTP, FTP, SMTP,
      XML-RPC, POP, IMAP, and CGI programming), software engineering (unit
      testing, logging, profiling, and parsing Python code), and operating
      system interfaces (system calls, filesystems, and TCP/IP sockets).
      Look at the table of contents 
      <a href="https://docs.python.org/3/library/index.html" target="_self">
        The Python Standard Library
      <
      to get an idea of what’s available. A wide variety of third-party
      extensions are also available. Consult 
      <a href="https://pypi.org/" target="_self">
        Python Package Index
      <
      to find packages of interest to you.
    </p>
    <p>
      Python allows programmers to express concepts in fewer lines of code
      than would be possible in many other languages, such as C, and the
      language has constructs intended to be used to create clear programs
      in a variety of domains.
    </p>
    <p>
      <strong>Example:</strong>
    </p>
    <p>
      <strong>Python program</strong>
    </p>

    <p>
      <em>versus</em>
    </p>
    <p>
      <strong>C program</strong>
    </p>

    <p>
      Python was originally created
      <a
        href="https://en.wikipedia.org/wiki/Guido_van_Rossum"
        target="_self"
      >
        <strong>Guido van Rossum</strong>
      <
      and was first released in 1991. Guido van Rossum chose Python as a
      working title for the project, being in a slightly irreverent mood
      (and a big fan of Monty Python's Flying Circus).
    </p>
    <p>
      Python 2 (16 October 2000 - 01 January 20
      <a href="https://www.python.org/doc/sunset-python-2/" target="_self">
        has officially been sunset
      </a>
      , and Python 3 (3 December 2008) is the only supported, maintained,
      and improved major version as of 01 January 2020. We have a community
      of people from both worlds, and if you have a question that relates to
      a specific version, please consider mentioning the version and
      implementation that you are using, when asking a question about Python
      (see <strong>Tagging Recommendation</strong> section below).
    </p>
    <p>
      Python supports multiple programming paradigms, including
      object-oriented, imperative, and functional programming styles. It
      features a fully dynamic type system and automatic memory management,
      similar to that of Scheme, Ruby, Perl, and Tcl.
    </p>
    <p>
      Like ot
      <a
        href="https://en.wikipedia.org/wiki/Dynamic_programming_language"
        target="_self"
      >
        dynamic languages
      </a>
      , Python is often used a
      <a
        href="https://stackoverflow.com/tags/scripting/info"
        target="_self"
      >
        scripting language
      <
      but is also used in a wide range of non-scripting contexts. Using
      third-party tools, Python code can be packaged into stand-alone
      executable programs. Python interpreters are available for many
      operating systems.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/CPython" target="_self">
        CPython
      </a>
      , the reference implementation of Python, is free and open-source
      software. It has a community-based development model, as do nearly all
      of its alternative implementations. There are a wide variety of
      implementations more suited for specific environments or tasks (
      <a
        href="https://wiki.python.org/moin/PythonImplementations"
        target="_self"
      >
        Python implementations
      <
      on the Python wiki).
    </p>
    <p>
      The philosophy of Python is succinctly formulated
      <a href="https://www.python.org/dev/peps/pep-0020" target="_self">
        <em>The Zen of Python</em>
      </a>
      , written by Tim Peters, which one can read by issuing this command,
      in the interactive python interpreter:
    </p>

    <p>
      Unlike many other languages, Python uses an indentation-based syntax
      (in which tabs and spaces are noninterchangeable). This may take some
      getting used to for programmers who are familiar with using braces.
    </p>

    <p>
      To help with the transition, using a properly configured text editor
      or IDE is recommended. Python comes with a basic IDE cal
      <a href="https://docs.python.org/3/library/idle.html" target="_self">
        IDLE
      <
      (
      <a
        href="https://stackoverflow.com/questions/tagged/python-idle"
        target="_self"
      >
        python-idle
      </a>
      ), to get you started. Other popular examples are the charityware Vim
      (
      <a
        href="https://stackoverflow.com/questions/tagged/vim"
        target="_self"
      >
        vim
      </a>
      ), the free GNU Emacs (
      <a
        href="https://stackoverflow.com/questions/tagged/emacs"
        target="_self"
      >
        emacs
      </a>
      ), Eclipse+PyDev (
      <a
        href="https://stackoverflow.com/questions/tagged/eclipse"
        target="_self"
      >
        eclipse
      </a>
  
      <a
        href="https://stackoverflow.com/questions/tagged/pydev"
        target="_self"
      >
        pydev
      </a>
      ), or PyCharm (
      <a
        href="https://stackoverflow.com/questions/tagged/pycharm"
        target="_self"
      >
        pycharm
      </a>
      ). Take a look at t
      <a
        href="https://en.wikipedia.org/wiki/List_of_integrated_development_environments_for_Python#Python"
        target="_self"
      >
        IDE comparison list
      <
      for many other alternatives.
    </p>
    <p>
      There is also a style guide for Python, na
      <a href="https://www.python.org/dev/peps/pep-0008/" target="_self">
        PEP 8
      </a>
      , which aims to make Python code more readable and consistent. This
      guide is (should be) followed all across the Python development
      community.
    </p>
  `,
  },
  {
    tagId: 3,
    tagName: "java",
    tagInfo: `<p>
    Java is a high-level object-oriented programming language. Use this tag
    when you're having problems using or understanding the language itself.
    This tag is frequently used alongside other tags for libraries and/or
    frameworks used by Java developers.
  </p>`,
    tagDescription: `
    <p>
      <a href="https://www.java.com/en/" target="_self">
        Java
      <
      i
      <a
        href="https://en.wikipedia.org/wiki/High-level_programming_language"
        target="_self"
      >
        high-level
      </a>
  
      <a href="https://en.wikipedia.org/wiki/Cross-platform" target="_self">
        platform-independent
      </a>
  
      <a
        href="https://en.wikipedia.org/wiki/Object-oriented_programming"
        target="_self"
      >
        object-oriented
      </a>
  
      <a
        href="https://en.wikipedia.org/wiki/Functional_programming"
        target="_self"
      >
        functional
      <
      programming language 
      <a href="https://en.wikipedia.org/wiki/Runtime_system" target="_self">
        runtime environment
      </a>
      .
    </p>
    <p>
      The Java language derives much of its syntax from C and C++, but its
      object model is simpler than that of the latter and it has fewer
      low-level facilities. Java applications are typically compiled
      <a href="https://en.wikipedia.org/wiki/Java_bytecode" target="_self">
        bytecode
      <
      (cal
      <a
        href="https://en.wikipedia.org/wiki/Java_class_file"
        target="_self"
      >
        class files
      </a>
      ) that can be executed by a JVM (Java Virtual Machine), independent of
      computer architecture. The JVM often further compiles code to native
      machine code to optimize performance.
    </p>
    <p>
      The JVM manages memory with the help o
      <a
        href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
        target="_self"
      >
        garbage collector
      <
      (see a
      <a
        href="https://stackoverflow.com/questions/tagged/garbage-collection"
        target="_self"
      >
        garbage-collection
      </a>
      ) to handle object removal from memory when objects are no longer in
      use. This means the programmer doesn't have to manually remove objects
      from memory, unlike in languages such as C. Jav
      <a href="https://en.wikipedia.org/wiki/Type_system" target="_self">
        typing discipline
      <
      is static, strong, safe, nominative, and manifest. Java supports
      features such
      <a
        href="https://en.wikipedia.org/wiki/Reflection_(computer_programming)"
        target="_self"
      >
        reflection
      </a>
      , interfacing with C and C++ via the JNI (Java Native Interface), and
      running scripting languages such
      <a href="https://en.wikipedia.org/wiki/JavaScript" target="_self">
        JavaScript
      </a>
      .
    </p>
    <p>
      Java is designed to have as few implementation dependencies as
      possible, intended to allow application developers
      <a
        href="https://en.wikipedia.org/wiki/Write_once,_run_anywhere"
        target="_self"
      >
        <em>write once, run anywhere</em>
      </a>
      , or someti
      <a
        href="https://en.wikipedia.org/wiki/Write_once,_run_everywhere"
        target="_self"
      >
        <em>write once, run everywhere</em>
      <
      (code that executes on one platform does not need to be recompiled to
      run on another). Java was originally developed
      <a href="https://en.wikipedia.org/wiki/James_Gosling" target="_self">
        James Gosling
      <
      at Sun Microsystems (which fully merged with Oracle Corporation on
      January 27th, 2010) and was released in 1995 as a core component of
      Sun Microsystems' Java platform. Java was started as a project called
      "Oak" by James Gosling in June 1991.
    </p>
    <p>
      
      <a
        href="https://en.wikibooks.org/wiki/Java_Programming/The_Java_Platform"
        target="_self"
      >
        Java platform
      <
      is the name given by Sun (now Oracle) to computing systems that have
      installed tools for developing and running Java programs. The platform
      features a wide variety of tools that can help developers work
      efficiently with the Java programming language.
    </p>
    <p>
      To get started, you downloa
      <a
        href="https://www.oracle.com/java/technologies/downloads/"
        target="_self"
      >
        <strong>Java Development Kit (JDK)</strong>
      </a>
      , which lets you both <em>develop</em> and <em>run</em> java
      applications.
    </p>
    <h2>Background</h2>
    <p>
      The main reference implementation of Java is open source (
      <a href="https://openjdk.java.net/" target="_self">
        OpenJDK
      </a>
      ) and is supported by major companies including Oracle, Apple,
      Microsoft, SAP, and IBM.
    </p>
    <p>
      Java is compiled i
      <a href="https://en.wikipedia.org/wiki/Bytecode" target="_self">
        bytecode
      </a>
      , which is then compiled by the JVM into native machine code. The
      compilation is d
      <a
        href="https://en.wikipedia.org/wiki/Just-in-time_compilation"
        target="_self"
      >
        just-in-time
      <
      (JIT). This was initially viewed as a performance hit, but JVM and JIT
      compilation improvements have made this less of a concern. In some
      cases, the JVM may even be faster than native code compiled to target
      an older version of a processor for backward compatibility reasons.
      Since Java 9, it can be compi
      <a
        href="https://en.wikipedia.org/wiki/Ahead-of-time_compilation"
        target="_self"
      >
        ahead-of-time
      <
      (AOT).
    </p>
    <p>
      Very few computers can run Java programs directly. Before Java 9,
      users running Java programs were expected to have the JRE (Java
      Runtime Environment) installed on their system. Modern Java programs
      intended to run directly on client computers now ship with their own
      installers.
    </p>
  `,
  },
  {
    tagId: 4,
    tagName: "c#",
    tagInfo: `  <p>
    C# (pronounced "see sharp") is a high-level, statically typed,
    multi-paradigm programming language developed by Microsoft. C# code
    usually targets Microsoft's .NET family of tools and run-times, which
    include .NET, .NET Framework, .NET MAUI, and Xamarin among others. Use
    this tag for questions about code written in C# or about C#'s formal
    specification.
  </p>`,
    tagDescription: `
    <p>
      <a
        href="https://stackoverflow.com/questions/tagged/c%23"
        target="_self"
      >
        c#
      <
      is a <em>multi-paradigm programming</em> language includ
      <em>
        object-oriented programming, functional programming, and imperative
        programming
      </
      created by Microsoft in conjunction with .NET. C# can be used with any
      .NET implementation such as .NET, .NET Framework, Mono, ML.Net and
      Xamarin.
    </p>
    <p>
      <strong>New features</strong>
    </p>
    <p>
      Versions 1.0/1.2 and 2.0 of C# were submitted and approved as b
      <a
        href="http://web.archive.org/web/20190114153439/http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-334.pdf"
        target="_self"
      >
        ECMA
      <
      (
      <a
        href="https://www.ecma-international.org/publications/standards/Ecma-334.htm"
        target="_self"
      >
        Web-Version
      </a>
      ) 
      <a
        href="http://standards.iso.org/ittf/PubliclyAvailableStandards/c042926_ISO_IEC_23270_2006(E).zip"
        target="_self"
      >
        ISO/IEC
      <
      standards. Latest ECMA vers
      <a
        href="https://www.ecma-international.org/publications/standards/Ecma-334.htm"
        target="_self"
      >
        matches
      <
      Microsoft C# 5.0 specification. Language specifications are also
      available from Microsoft for
      <a
        href="http://download.microsoft.com/download/3/8/8/388e7205-bc10-4226-b2a8-75351c669b09/CSharp%20Language%20Specification.doc"
        target="_self"
      >
        3.0
      <
      and
      <a
        href="https://www.microsoft.com/en-us/download/details.aspx?id=7029"
        target="_self"
      >
        5.0
      <
      as well as
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/"
        target="_self"
      >
        6.0
      <
      draft.
    </p>
    <p>
      The language's type system was originally static, with only explicit
      variable declarations allowed. The introduction
      <a
        href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/var"
        target="_self"
      >
        <code>var</code>
      <
      (C# 3.0) 
      <a
        href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/dynamic"
        target="_self"
      >
        <code>dynamic</code>
      <
      (C# 4.0) allowed it to use type inference for implicit variable
      typing, and to consume dynamic type systems, respectively. Delegates,
      especially with lexical closure support for anonymous methods (C# 2.0)
      and lambda expressions (C# 3.0), allow the language to be used for
      functional programming.
    </p>
    <p>
      <strong>C# 5.0</strong> introduced 
      <a
        href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/async"
        target="_self"
      >
        <code>async</code>
      <
      
      <a
        href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/await"
        target="_self"
      >
        <code>await</code>
      <
      keywords to simplify the use of asynchronous function calls.
    </p>
    <p>
      <strong>C# 6.0</strong> introduced 
      <a
        href="https://learn.microsoft.com/dotnet/csharp/language-reference/operators/null-conditional-operators"
        target="_self"
      >
        null propagation operator
      <
      <code>?.</code>, exception filte
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interpolated-strings"
        target="_self"
      >
        string interpolation
      </a>
      , 
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-6"
        target="_self"
      >
        many other features
      <
      that help to write simple code.
    </p>
    <p>
      <strong>C# 7.0</strong> introduced multiple <code>out</co
      arguments, pattern matching, tuples for a return val
      <code>is</code>-expressions &amp; <code>switch</code> statements with
      patterns, deconstruction, local functions, and some more.
    </p>
    <p>
      <strong>C# 7.1</strong> introduced generic Pattern Matching, inferred
      tuple element names, <code>default</code> literal expressions, async
      main, and some more.
    </p>
    <p>
      <strong>C# 7.2</strong> introduced <code>private protected</code>,
      non-trailing named arguments, digital separator after base specifier,
      ref conditional expression, reference semantics for value types, and
      some more.
    </p>
    <p>
      <strong>C# 7.3</strong> introduced features that enable safe code to
      be as performant as unsafe code, new compiler options, the usage
      <code>out</code> variable declarations in field, property and
      constructor initializers, support <code>==</code> and <code>!=</co
      on tuple types and some more.
    </p>
    <p>
      <strong>C# 8.0</strong> introdu
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8#nullable-reference-types"
        target="_self"
      >
        <em>nullable reference types</em>
      <
      which generates compiler warnings about possible dereferencing of
      nulls unless the code expresses explicitly that a variable may
      <code>null</code> (e.g., <code>string? foo</code> is a variable which
      may be null), <em>async streams</em> which empowers -especially- IoT
      and cloud integrations and <em>default interface methods</em> to
      prevent breaking changes to interfaces, along w
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8"
        target="_self"
      >
        some other
      <
      improvements.
    </p>
    <p>
      <strong>C# 9.0</strong> introduced plenty of new concepts and features
      such
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#record-types"
        target="_self"
      >
        Records
      </a>
  
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#init-only-setters"
        target="_self"
      >
        Init only setters
      </a>
  
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#top-level-statements"
        target="_self"
      >
        Top-level statements
      </a>
  
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#pattern-matching-enhancements"
        target="_self"
      >
        Pattern matching enhancements
      <
      and more.
    </p>
    <p>
      The compilation is usually done in 
      <em>Microsoft Intermediate Language</em> (MSIL), which is then
      JIT-compiled to native code (and cached) during execution in the
      Common Language Runtime (CLR). However, options l
      <a
        href="https://learn.microsoft.com/dotnet/framework/tools/ngen-exe-native-image-generator"
        target="_self"
      >
        NGen
      <
      (for 
      <a href="https://www.microsoft.com/net" target="_self">
        .NET Framework
      </a>
      ) 
      <a
        href="https://www.mono-project.com/docs/advanced/aot/"
        target="_self"
      >
        AOT
      <
      (for Mono) mean that C# code can be directly compiled into the native
      image. Additionally, some frameworks (for example, the .NET Micro
      Framework) act as CIL interpreters, with no JIT.
    </p>
    <p>
      Generics in C# are provided in part by the runtime, unlike C++
      templates (templates are resolved at compile time), or Java's generics
      (which use type-erasure).
    </p>
    <p>
      With the combination
      <a href="https://www.microsoft.com/net" target="_self">
        .NET Core
      <
      for Windows, macOS and Lin
      <a href="https://www.microsoft.com/net" target="_self">
        .NET Framework
      <
      for Windows (desktop/server/mobile), Mono that powers Xamarin
      applications on Android, Mac, iOS, tvOS and watchOS,
      Silverlight/Moonlight (browser/mobile), Compact Framework (mobile),
      and Micro Framework (embedded devices), it's available for a wide
      range of platforms.
    </p>
    <p>
      <strong>C# 10</strong> introduced file-scoped namespace declarations,
      global using directives, implicit usings, record structs, along with
      some other improvements.
    </p>
    <p>
      <strong>C# 11</strong> introduced raw string literals, required
      members, generic attributes, list patterns, file-local types, generic
      math support 
      <a
        href="https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11"
        target="_self"
      >
        more
      </a>
      .
    </p>
    <p>
      <strong>Hello World Example:</strong>
    </p>

    <p>
      <strong>Hello World example using classes:</strong>
    </p>

    <p>
      <strong>Hello World example since .NET 6:</strong>
    </p>

    <p></p>
  `,
  },
  {
    tagId: 5,
    tagName: "html",
    tagInfo: ` <p>
    HTML (HyperText Markup Language) is the markup language for creating web
    pages and other information to be displayed in a web browser. Questions
    regarding HTML should include a minimal reproducible example and some
    idea of what you're trying to achieve. This tag is rarely used alone and
    is often paired with CSS and JavaScript.
  </p>`,
    tagDescription: `  <>
    <p>
      <a href="https://en.wikipedia.org/wiki/HTML" target="_self">
        HTML
      <
      (HyperText Markup Language) is the markup language used for
      structuring web pages and other information to be displayed in a web
      browser. HTML describes the structure of a web page semantically along
      with cues for presentation, making it a markup language rather than a
      programming language. A browser 'renders' HTML in conjunction with
      CSS, which defines the 'style' (colours, fonts, layout, etc.), and
      JavaScript, which defines interactive and dynamic elements, adding
      style and behaviour to the pages.
    </p>
    <p>
      <a href="https://html.spec.whatwg.org/multipage/" target="_self">
        https://html.spec.whatwg.org/multipage/
      <
      is the canonical HTML specification.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/HTML" target="_self">
        HTML
      <
      (HyperText Markup Language) is the primary markup language for
      creating web pages and other information to be displayed to humans in
      a web browser.
    </p>
    <p>
      It was invented by 
      <a
        href="https://en.wikipedia.org/wiki/Tim_Berners-Lee"
        target="_self"
      >
        Tim Berners-Lee
      <
      while developing the first Web browser
      <a href="https://en.wikipedia.org/wiki/CERN" target="_self">
        CERN
      <
      to enable researchers to share their findings and was formally
      released in June 1993. The origi
      <a
        href="http://lists.w3.org/Archives/Public/www-talk/1991SepOct/0003.html"
        target="_self"
      >
        "HTML Tags"
      <
      were first publicly mentioned by Berners-Lee in 1991 and borrowed the
      syntax from CER
      <a href="https://en.wikipedia.org/wiki/SGMLguid" target="_self">
        SGML-based documentation standard
      </a>
      . The latest and current version for HTML
      <a href="https://www.w3.org/TR/html/" target="_self">
        HTML5.3
      </a>
      .
    </p>
    <p>
      HTML elements form the building blocks of all web pages. HTML allows
      images and objects to be embedded in a page. It references styles and
      scripts and carries meta-data. It can be used to create interactive
      forms. It provides a means to create structured documents by denoting
      structural semantics for text such as headings, paragraphs, lists,
      links, quotes, and other items. It can embed scripts written in
      languages such as JavaScript, which affects the behaviour of HTML web
      pages. Web pages generated by various programming languages (such as
      PHP, JSP, VF, ASP.NET, etc.) are rendered as HTML in a browser.
    </p>
    <p>
      HTML is a hierarchical (tree-structured) markup language. That is, an
      item might descend from another item, which is its ancestor. However,
      if item2 is a descendant of item1, they have an additional special
      relation: item2 is <em>inside</em> of item1, or item1
      <em>wrapped around</em> item2.
    </p>
  </>`,
  },
  {
    tagId: 6,
    tagName: "jquery",
    tagInfo: `   <p>
    jQuery is a JavaScript library. Consider also adding the JavaScript tag.
    jQuery is a popular cross-browser JavaScript library that facilitates
    Document Object Model (DOM) traversal, event handling, animations and
    AJAX interactions by minimizing the discrepancies across browsers. A
    question tagged jQuery should be related to jQuery, so jQuery should be
    used by the code in question, and at least jQuery usage-related elements
    must be in the question.
  </p>`,
    tagDescription: ` <>
    <h2>About</h2>
    <p>
      <a href="https://jquery.com/" target="_self">
        jQuery (Core)
      <
      is a cross-browser JavaScript library (created
      <a href="https://johnresig.com/" target="_self">
        John Resig
      </a>
      ) that provides abstractions for common client-side tasks such
      <a href="https://javascript.info/dom-navigation" target="_self">
        DOM traversal
      </a>
      , DOM manipulation, event handling, animation, and AJAX.
    </p>
    <p>
      jQuery simplifies HTML document traversal and manipulation, event
      handling, animation, and AJAX due to its API that works across many
      browsers.
    </p>
    <p>
      jQuery provides a platform to create plugins that extend its
      capabilities beyond those already provided by the library. The
      development of jQuery and related projects is coordinated by 
      <a href="https://jquery.org/" target="_self">
        jQuery Foundation
      </a>
      .
    </p>
    <h2>Features</h2>
    <p>jQuery includes the following features:</p>
    <ul>
      <li>
        DOM element selections using the multi-browser open-source selector
        engine Sizzle, a spin-off of the jQuery project
      </li>
      <li>
        DOM traversal and modification (including support for CSS 1–3)
      </li>
      <li>
        DOM manipulation based on CSS selectors that use node element names
        and attributes (e.g. <code>ID</code> and <code>class</code>) as
        criteria to build selectors
      </li>
      <li>Events</li>
      <li>Effects and animations</li>
      <li>AJAX</li>
      <li>JSON parsing (for older browsers)</li>
      <li>Extensibility through plug-ins</li>
      <li>Utilities such as user agent information, feature detection</li>
      <li>
        Compatibility methods that are natively available in modern browsers
        but need fallbacks for older ones - For example, 
        <code>inArray()</code> and <code>each()</code> functions
      </li>
      <li>Multi-browser (not to be confused with cross-browser) support</li>
    </ul>
  </>`,
  },
  {
    tagId: 7,
    tagName: "android",
    tagInfo: ` <p>
    Android is Google's mobile operating system, used for programming or
    developing digital devices (Smartphones, Tablets, Automobiles, TVs,
    Wear, Glass, IoT). For topics related to Android, use Android-specific
    tags such as android-intent, android-activity, android-adapter, etc. For
    questions other than development or programming but related to the
    Android framework, use this link: https://android.stackexchange.com.
  </p>`,
    tagDescription: ` <>
    Android is a mobile operating system developed by a consortium of
    developers known as the Open Handset Alliance, with the main contributor
    and commercial marketer being Google. It is based on a modified version
    of the Linux kernel and other open source software and is designed
    primarily for touchscreen mobile devices such as smartphones and
    tablets. In addition, Google has further developed Android TV for
    televisions, Android Auto for cars, and Wear OS for wrist watches, each
    with a specialized user interface. Variants of Android are also used on
    game consoles, digital cameras, PCs, and other electronics. Tag Usage
    When asking about your app force closing or crashing, you have to
    include an MCVE, which has to include a stacktrace. See also: How to Ask
    When adding additional tags to questions, please use the
    Android-specific tags such as android-intent, android-activity,
    android-adapter, and not individual tags like intent, activity or
    adapter. For non-developer Android questions, see Android Enthusiasts
    Stack Exchange.
  </>`,
  },
];

export const URL = "/mphasis-sparkle-quest-site";
export const API_endpoint =
  "http://quest-backend-alb-660147533.ap-south-1.elb.amazonaws.com";
