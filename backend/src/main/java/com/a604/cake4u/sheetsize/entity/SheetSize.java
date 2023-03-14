package com.a604.cake4u.sheetsize.entity;

import lombok.Builder;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

public class SheetSize {

    @OneToOne
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //100시작 vs 오토생성
    private Long id;

//    @OneToOne
//    @Column(nullable = false)
//    @JoinColumn(name = "id")
//    private Seller seller;

    @Builder.Default
    @ColumnDefault("0")
    @Enumerated(EnumType.STRING)
    private boolean no1 = false;

    @Builder.Default
    @ColumnDefault("0")
    @Enumerated(EnumType.STRING)
    private boolean no2 = false;

    @Builder.Default
    @ColumnDefault("0")
    @Enumerated(EnumType.STRING)
    private boolean no3 = false;

    @Builder.Default
    @ColumnDefault("0")
    @Enumerated(EnumType.STRING)
    private boolean mini = false;
}
