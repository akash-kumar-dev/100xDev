package org.example.Retrofit;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("https://jsonplaceholder.typicode.com/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        TodoService todoService = retrofit.create(TodoService.class);

        Todo t = todoService.getBodyByID("1").execute().body();

        System.out.println("Todo Object: " + t.toString());

    }
}
