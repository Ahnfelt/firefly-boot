/*
nodeMain(system: NodeSystem) {
    benchmark()
    let time = system.mainTask().time {
        benchmark()
    }
    Log.trace(time.second.show())
}

benchmark() {
    mutable num = 20000
    let v = num
    mutable i = 1
    mutable j = 1
    mutable sum = 0
    while {i < v} {
        j = 1
        while {j < num - 1} {
            if(num % j == 0) {
                sum += j
            }
            j += 1
        }
        if(num == sum) {
            Log.show(sum)
        }
        sum = 0
        num -= 1
        i += 1
    }    
}
*/

// Rewrite this in Java

public class Pyrotek45 {
    public static void main(String[] args) {
        benchmark();
        long time = System.currentTimeMillis();
        benchmark();
        time = System.currentTimeMillis() - time;
        System.out.println(time / 1000.0);
    }

    public static void benchmark() {
        int num = 20000;
        int v = num;
        int i = 1;
        int j = 1;
        int sum = 0;
        for (i = 1; i < v; i++) {
            for (j = 1; j < num - 1; j++) {
                if (num % j == 0) {
                    sum += j;
                }
            }
            if (num == sum) {
                System.out.println(sum);
            }
            sum = 0;
            num -= 1;
        }
    }
}
