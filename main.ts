function slideDown () {
    hero.ay = 0
    hero.vy = 15
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Stop double jump, only allow jump when you are in the air!
    if (hero.isHittingTile(CollisionDirection.Right) || hero.isHittingTile(CollisionDirection.Left) || hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -200
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(leftFacingImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    hero.setImage(rightFacingImg)
})
let hero: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
let rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . f f f f 2 f f . . . . . 
    . . f f e e e e f 2 f f . . . . 
    . f f e e e e e f 2 2 f f . . . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 2 2 2 2 e f . . 
    f f f e 2 2 2 f f f f e 2 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 b f d d e f . . . 
    . . f e e e 4 d d d e e . c . . 
    . . . f 2 2 2 2 e e d d e c c c 
    . . . f 4 4 4 e 4 4 d d e c d d 
    . . . f f f f f e e e e . c c c 
    . . f f f f f f f f . . . c . . 
    . . f f f . . f f . . . . . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 f f f f . . . . 
    . . . . f f 2 f e e e e f f . . 
    . . . f f 2 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 2 2 2 e e f f f f f . 
    . . f 2 e f f f f 2 2 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 f b e 4 4 e f e f 
    . . . f e d d f b 4 d 4 e e f . 
    . . c . e e d d d 4 e e e f . . 
    c c c e d d e e 2 2 2 2 f . . . 
    d d c e d d 4 4 e 4 4 4 f . . . 
    c c c . e e e e f f f f f . . . 
    . . c . . . f f f f f f f f . . 
    . . . . . . . f f . . f f f . . 
    `
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
hero = sprites.create(rightFacingImg, SpriteKind.Player)
controller.moveSprite(hero, 100, 0)
tiles.setTilemap(tiles.createTilemap(hex`0a0020000303030303030303030303030303030303030303030303030303030303020303030301010101010103030303010303030303030303030103030303030301030303030303030303010303030303010303030103030303030103030301030303030301030303030303030303010303030303030303030101030303030303030303010303030303030303030303030303010303030303030303030103030303030303030301030303010303030303010303030103030303030103030303030303030301030303030301030303010303030303010303030303030303030103030303030303030301030301030303030303010303010103030303030103030303030103030301030103030301030303010301030303010103030303030303030303030303030303030303030303030303030303030303030301010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 
    . . . . 2 . . . . . 
    . . . . 2 . . . . . 
    . 2 . . . . . . . . 
    . 2 . . . . . 2 . . 
    . 2 . . . . . 2 . . 
    . 2 . . . . . 2 . . 
    . . . . . . . 2 . . 
    . . . . . . . 2 2 . 
    . . . . . . . . 2 . 
    . . . . . . . . . . 
    . . . 2 . . . . . . 
    . . . 2 . . . . . . 
    . . . 2 . . . 2 . . 
    . . . 2 . . . 2 . . 
    . . . 2 . . . . . . 
    . . . 2 . . . . . 2 
    . . . 2 . . . . . 2 
    . . . . . . . . . 2 
    . . . . . . . . . 2 
    . . 2 . . . . . . 2 
    . . 2 2 . . . . . 2 
    . . . . . 2 . . . 2 
    . 2 . . . 2 . . . 2 
    . 2 . . . 2 2 . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.floorLightMoss,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundSouthEast1], TileScale.Sixteen))
tiles.placeOnTile(hero, tiles.getTileLocation(5, 30))
scene.cameraFollowSprite(hero)
hero.ay = 350
game.onUpdateInterval(100, function () {
    // hero.vy checks to make sure you only slide when you are falling
    if (hero.isHittingTile(CollisionDirection.Right) && hero.vy > 0) {
        hero.setImage(rightSwordOutImg)
        slideDown()
    } else if (hero.isHittingTile(CollisionDirection.Left) && hero.vy > 0) {
        hero.setImage(leftSwordOutImg)
        slideDown()
    } else {
        hero.ay = 350
        if (hero.image == leftSwordOutImg) {
            hero.setImage(leftFacingImg)
        } else if (hero.image == rightSwordOutImg) {
            hero.setImage(rightFacingImg)
        }
    }
})
