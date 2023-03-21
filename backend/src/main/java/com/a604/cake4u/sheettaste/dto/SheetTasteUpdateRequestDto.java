package com.a604.cake4u.sheettaste.dto;

import com.a604.cake4u.sheettaste.entity.SheetTaste;
import lombok.*;

@Getter
@Setter
public class SheetTasteUpdateRequestDto {
    private Long id;
    private Long sellerId;
    private boolean vanila;
    private boolean chocolate;
    private boolean earlGray;
    private boolean redVelvet;
    private boolean matcha;
    private boolean mocha;
    private boolean cheese;
    private boolean carrot;
    private boolean sweetPotato;

    public SheetTasteUpdateRequestDto(Long id, Long sellerId, boolean vanila, boolean chocolate, boolean earlGray, boolean redVelvet, boolean matcha, boolean mocha, boolean cheese, boolean carrot, boolean sweetPotato) {
        this.id = id;
        this.sellerId = sellerId;
        this.vanila = vanila;
        this.chocolate = chocolate;
        this.earlGray = earlGray;
        this.redVelvet = redVelvet;
        this.matcha = matcha;
        this.mocha = mocha;
        this.cheese = cheese;
        this.carrot = carrot;
        this.sweetPotato = sweetPotato;
    }

    public SheetTaste toEntity() {
        return SheetTaste.builder()
                .id(id)
                .sellerId(sellerId)
                .vanila(vanila)
                .chocolate(chocolate)
                .earlGray(earlGray)
                .redVelvet(redVelvet)
                .matcha(matcha)
                .cheese(cheese)
                .carrot(carrot)
                .sweetPotato(sweetPotato)
                .build();
    }
}
