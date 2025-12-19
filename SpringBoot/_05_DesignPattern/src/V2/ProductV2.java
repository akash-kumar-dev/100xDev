package V2;

public class ProductV2 {

    private String title;
    private int price;
    private String description;
    private String createdAt;
    private String updatedAt;

    public String getTitle() {
        return this.title;
    }

    public int getPrice() { return this.price; }

    public ProductV2(BuilderV2 b) {
        if (b.getPrice() > 0) {
           this.price = b.getPrice();
        }

        this.title = b.getTitle();
    }

}
