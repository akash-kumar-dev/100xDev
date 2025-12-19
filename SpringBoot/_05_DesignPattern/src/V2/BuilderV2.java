package V2;

public class BuilderV2 {
    private String title;
    private int price;
    private String description;
    private String createdAt;
    private String updatedAt;

    public String getTitle() {
        return this.title;
    }

    public int getPrice() {
        return this.price;
    }

    public void setTitle(String Title) {
        this.title = Title;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public BuilderV2() {

    }
}
