package V2;

public class Main {
    public static void main(String[] args) {
        BuilderV2 b = new BuilderV2();
        b.setTitle("ZeroBook");
        b.setPrice(10000);

        ProductV2 p2 = new ProductV2(b);

        System.out.println(p2.getTitle());
        System.out.println(p2.getPrice());
    }
}
