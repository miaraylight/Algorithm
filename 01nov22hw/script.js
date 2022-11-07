

// First level: вычислить сложность в лучшем и худшем случае

// доп 1 лучшее конст О(1), худшее линей О(n)
// void method(int a, int b) {
//         while (a != b) {
//             if (a > b) {
//                 a = a - b;
//             } else {
//                 b = b - a;
//             }
//         }
//     }

// доп 2  О(n^2 * log(n))
//    void method(int n) {
//         for (int i = 0; i < n / 2; i++) {
//             for (int j = 1; j + n / 2 <= n; j++) {
//                 for (int k = 1; k <= n; k = k * 2) {
//                     System.out.println("I am expert!");
//                 }
//             }
//         }
//     }

// доп 3  n * (n + n/2 + n/3 + ... + n/n) = n * (n * (1 + 1/2 + 1/3 + ... 1/n)) =
// = n^2 * (ln(n) + const) ~ O(n^2 * log(n))
// void method3(int 5) {
//         for (int i = 1; i <= 5; i++) {
//             for (int j = 1; j <= 5; j = j + i) {
//                 System.out.println("I am expert!");
//             }
//         }
//     }

// Second level: 
