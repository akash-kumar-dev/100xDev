package v1;

public class ProductV1 {

    private String title;
    private int price;
    private String description;
    private String createdAt;
    private String updatedAt;

    public String getTitle() {
        return this.title;
    }

    public ProductV1(String title, int price, String description, String createdAt, String updatedAt) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}
