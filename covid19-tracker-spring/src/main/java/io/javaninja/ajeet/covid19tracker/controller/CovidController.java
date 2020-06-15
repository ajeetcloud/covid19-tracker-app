package io.javaninja.ajeet.covid19tracker.controller;

import io.javaninja.ajeet.covid4j.CovidApi;
import io.javaninja.ajeet.covid4j.CovidStats;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CovidController {

    @GetMapping("/getCovidDataByCountry/{country}")
    public CovidStats getCovidDataByCountry(@PathVariable String country) throws IOException {

        return CovidApi.getAllCovidStatsForCountry(country);
    }

    @GetMapping("/getCovidDataByCityOrState/{cityOrState}")
    public CovidStats getCovidDataByCityOrState(@PathVariable String cityOrState) throws IOException {

        return CovidApi.getAllCovidStatsForCityOrState(cityOrState);
    }

}
