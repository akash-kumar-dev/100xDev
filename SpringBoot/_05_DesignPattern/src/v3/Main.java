package v3;

public class Main {
    public static void main(String[] args) {

        ProductV3 p3 = ProductV3.getBuilder()
                                .setTitle("NoteBook")
                                .setPrice(200)
                                .build();

        System.out.println(p3.getTitle());
        System.out.println(p3.getPrice());
    }
}
