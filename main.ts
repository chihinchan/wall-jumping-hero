scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (hero.isHittingTile(CollisionDirection.Right)) {
        hero.setImage(rightSwordOutImg)
    } else if (hero.isHittingTile(CollisionDirection.Left)) {
        hero.setImage(leftSwordOutImg)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.isHittingTile(CollisionDirection.Right) || hero.isHittingTile(CollisionDirection.Left) || hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -300
    }
})
let hero: Sprite = null
let leftSwordOutImg: Image = null
let rightSwordOutImg: Image = null
rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . . . . . . . . . 
    . . . . f f f f 2 f f . . . . . . . . . . . . . 
    . . f f e e e e f 2 f f . . . . . . . . . . . . 
    . f f e e e e e f 2 2 f f . . . . . . . . . . . 
    . f e e e e f f e e e e f . . . . . . . . . . . 
    . f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
    f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
    f f f f f f f f e e e f f f . . . . . . . . . . 
    f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
    . f e e 4 d 4 b f d d e f . . . . . . . . . . . 
    . . f e e e 4 d d d e e . c . . . . . . . . . . 
    . . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
    . . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
    . . . f f f f f e e e e . c c c c c . . . . . . 
    . . f f f f f f f f . . . c . . . . . . . . . . 
    . . f f f . . f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `
leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . . . . . . . . . 
    . . . . f f f f 2 f f . . . . . . . . . . . . . 
    . . f f e e e e f 2 f f . . . . . . . . . . . . 
    . f f e e e e e f 2 2 f f . . . . . . . . . . . 
    . f e e e e f f e e e e f . . . . . . . . . . . 
    . f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
    f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
    f f f f f f f f e e e f f f . . . . . . . . . . 
    f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
    . f e e 4 d 4 b f d d e f . . . . . . . . . . . 
    . . f e e e 4 d d d e e . c . . . . . . . . . . 
    . . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
    . . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
    . . . f f f f f e e e e . c c c c c . . . . . . 
    . . f f f f f f f f . . . c . . . . . . . . . . 
    . . f f f . . f f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `
leftSwordOutImg.flipX()
hero = sprites.create(img`
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
    `, SpriteKind.Player)
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
