package com.scaler.productservice.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Product extends BaseModel{

    private int price;
    private String title;
    private String description;
    private String imageURL;
    private Category category;
}
