package com.resihack.resi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ResiApplication

fun main(args: Array<String>) {
    runApplication<ResiApplication>(*args)
}
