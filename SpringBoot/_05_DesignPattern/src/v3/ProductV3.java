package v3;


public class ProductV3 {

    private String title;
    private int price;
    private String description;
    private String createdAt;
    private String updatedAt;

    public String getTitle() {
        return this.title;
    }

    public int getPrice() { return this.price; }

    private ProductV3(BuilderV3 b) {
        if (b.getPrice() > 0) {
           this.price = b.getPrice();
        }

        this.title = b.getTitle();
    }

    public static BuilderV3 getBuilder() {
        return new BuilderV3();
    }

    public static class BuilderV3 {
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

        public BuilderV3 setTitle(String Title) {
            this.title = Title;
            return this;
        }

        public BuilderV3 setPrice(int price) {
            this.price = price;
            return this;
        }

        public ProductV3 build() {
            return new ProductV3(this);
        }

        BuilderV3() {

        }
    }


}
