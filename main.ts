basic.forever(function () {
    if (PlanetX_Basic.soilHumidity(PlanetX_Basic.AnalogRJPin.J2) < 30) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        music.playMelody("C5 B G B D G F - ", 120)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
    }
})
