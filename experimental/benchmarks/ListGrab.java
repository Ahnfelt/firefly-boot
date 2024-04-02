/*

nodeMain(system: NodeSystem) {
    let list = 1.to(10000)
    benchmark(list, 10000)
    let time = system.mainTask().time {
        benchmark(list, 10000)
    }
    Log.trace(time.second.show())
}

benchmark(list: List[Int], iterations: Int): Int {
    mutable sum = 0
    mutable i = 0
    while {i < iterations} {
        mutable j = 0
        while {j < 10000} {
            sum += list.grab(j)
            j += 1
        }
        i += 1
    }
    sum
}

 */

 // Rewrite the above to Java

import java.util.ArrayList;

public class ListGrab {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 1; i <= 10000; i++) {
            list.add(i);
        }
        benchmark(list, 100000);
        long time = System.currentTimeMillis();
        benchmark(list, 100000);
        time = System.currentTimeMillis() - time;
        System.out.println(time / 1000.0);
    }

    public static long benchmark(ArrayList<Integer> list, int iterations) {
        long sum = 0;
        for (int i = 0; i < iterations; i++) {
            sum = 0;
            for (int j = 0; j < 10000; j++) {
                sum += list.get(j);
            }
        }
        return sum;
    }
}
