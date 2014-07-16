
  var game = new Phaser.Game(1024, 768, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });



  function preload(){

    // todo: maybe load with offset *******************

    game.load.spritesheet('dude', '/images/bug_sprite_sheet1.png', 95.2, 124);
    game.load.image('invisible_line', '/images/blank_line.png');
    game.load.image('purp_line', '/images/purp_line.png');

    game.load.image('tree', '/images/tree.png');
    // level 1 images
    game.load.image('levelOneBackground', '/images/level1background-01.png');
    game.load.image('greenBackdrop', '/images/green_backdrop.png');
    game.load.image('whiteBackdrop', '/images/whiteBackground.png');
    game.load.image('acorn1', '/images/acorn_1.png');
    game.load.image('acorn2', '/images/acorn_2.png');
    game.load.image('acorn3', '/images/acorn_3.png');
    game.load.image('acorn4', '/images/acorn_4.png');
    game.load.image('acorn5', '/images/acorn_5.png');
    game.load.image('acorn6', '/images/acorn_6.png');
    game.load.image('branch1', '/images/h_branch_2.png');
    game.load.image('branch2', '/images/h_branch_3.png');
    game.load.image('branch3', '/images/h_branch_4.png');
    game.load.image('branch4', '/images/h_branch_1.png');
    game.load.image('cobweb', '/images/cobweb.png');
    game.load.image('spider', '/images/spider_bigger_face.png');
    game.load.spritesheet('fly', '/images/Tiny_flies_sheet.png', 19, 18);
    // game.load.spritesheet('branch-tiles', '/images/branch_1.png', 500, 500, 1);
    // game.load.spritesheet('branch-tiles', 'assets/physics/ninja-tiles128.png', 128, 128, 34);
    // game.load.spritesheet('branch-tiles', 'assets/physics/ninja-tiles128.png', 128, 128, 34);
  }

  var platforms;
    var acorns;
    var acorn2;
    var spider;

  function create(){

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.image(0, 0, 'whiteBackdrop').scale.setTo(50,50);

    game.add.image(0, 0, 'levelOneBackground');

    // spider = game.add.image(6, 3, 'spider');




    // tile = game.add.sprite(600, 480, 'branch-tiles', 3);
    // game.physics.ninja.enableTile(tile, tile.frame);

    // game.add.image(0, 0, 1024, 768, 'greenBackdrop');


    // background = game.add.image(0, 0, 1024, 768, 'levelOneBackground');


    platforms = game.add.group();

    platforms.enableBody = true;

    acorns = game.add.group();
    acorns.enableBody = true;

    // game.physics.arcade.enable(acorns);

    acorn2 = game.add.group();
    acorn2.enableBody = true;

    // game.physics.arcade.enable(acorns2);

    spider = game.add.sprite(90, -30, 'spider');
    game.physics.arcade.enable(spider);
    spider.enableBody = true;
    spider.scale.x = game.rnd.realInRange(.55, .55);
    spider.scale.y = game.rnd.realInRange(.55, .55);
    spider.body.immovable = true;

    // goal = game.add.sprite(90, 10, 'purp_line');
    // game.physics.arcade.enable(goal);
    // goal.enableBody = true;
    // goal.scale.x = game.rnd.realInRange(.55, .55);
    // goal.scale.y = game.rnd.realInRange(.55, .55);
    // goal.body.immovable = true;

    var ground = platforms.create(0, game.world.height -5, 'log1');

    ground.scale.setTo(50,3);

    ground.body.immovable = true;

    cursors = game.input.keyboard.createCursorKeys();

    
    function createBranch(x, y, image, size) {
        branch = game.add.image(x, y, image);
        branch.scale.x = game.rnd.realInRange(size, size);
        branch.scale.y = game.rnd.realInRange(size, size);
    }

    function createObject(x, y, image, size) {
        object = platforms.create(x, y, image);
        object.scale.x = game.rnd.realInRange(size, size);
        object.body.immovable = true;       
    }


    // left side
    createBranch(0, 120, 'branch1', 2);
    createObject(0, 120, 'purp_line', 6.5);

    // right side
    createBranch(410, 275, 'branch2', 2);
    createObject(415, 275, 'purp_line', 6.2);

    // left side
    createBranch(-50, 440, 'branch3', 2);
    createObject(-50, 440, 'purp_line', 7.30);

    // right side
    createBranch(410, 593, 'branch4', 2);
    createObject(455, 593, 'purp_line', 5.8);

    // ground
    createBranch(0, 750, 'branch3', 3);
    createObject(0, 750, 'purp_line', 11);

    function createAcorn(x, y, image, size, xVelocity){
    acorn = platforms.create(x, y, image);
    game.physics.arcade.enable(acorn);
    acorn.body.immovable = true;
    acorn.enableBody = true;
    acorn.exist = true;
    acorn.scale.setTo(size, size);
    acorn.body.velocity.x = xVelocity;
    acorn.body.bounce.y = 0.1;
    }

    game.time.events.loop(Phaser.Timer.SECOND * 3, acornLaunch, this);
    acornLaunch();
    function acornLaunch() {
    var acorn_array = ["acorn1", "acorn2", "acorn3", "acorn4", "acorn5", "acorn6"]
    random_acorn = acorn_array[Math.floor(acorn_array.length * Math.random())];
        // shoot right
    createAcorn(-1500, 70, random_acorn, 1.2, 500);
        // shoot left
    createAcorn(2000, 220, random_acorn, 1.5, -500);
        // shoot right
    createAcorn(-500, 400, random_acorn, 1.5, 500);
        // shoot left
    createAcorn(1000, 547, random_acorn, 1.5, -500);
    }

    fly = game.add.sprite(10, 25, 'fly')
    fly.scale.x = game.rnd.realInRange(.8, .8);
    fly.scale.y = game.rnd.realInRange(.8, .8);
    game.physics.arcade.enable(fly);
    fly.animations.add('right', [0, 1], .5, true);
    fly.animations.add('left', [2, 3], .5, true);
    fly.animations.play('right');

    beetle = game.add.sprite(800, 100, 'dude')
    beetle.scale.x = game.rnd.realInRange(.4, .4);
    beetle.scale.y = game.rnd.realInRange(.4, .4);
    game.physics.arcade.enable(beetle);

    beetle.body.bounce.y = 0.1;
    beetle.body.gravity.y = 350;
    beetle.body.collideWorldBounds = true;

    beetle.animations.add('left', [0, 1], 5, true);
    beetle.animations.add('right', [3, 4], 5, true);


    beetle.body.collideWorldBounds = true;
    acorn.body.collideWorldBounds = false;

    cursors = game.input.keyboard.createCursorKeys();

  }



  function update(){

    game.physics.arcade.collide(beetle, platforms);
    game.physics.arcade.collide(acorn, platforms);
    game.physics.arcade.collide(acorn, beetle);
    game.physics.arcade.collide(platforms, platforms);
    // game.physics.arcade.collide(beetle, spider);

    game.physics.arcade.overlap(beetle, spider, winFunc, null, this);


// push state document

// or a normal ajax request

// to drop the current page tag from the dom and get the new svg tag


    function winFunc(beetle, spider){
        // add functionality for bug to seem to go behind spider and hit hidden div
        beetle.kill();
        // insert timeout function
        spider.body.velocity.x = 0
        spider.body.velocity.y += 500
        console.log('WINNER!');

        var levelChange = function() {
           window.location.replace("http://localhost:3000/games/level2")
       };

       $('body').fadeOut(3000, function(){levelChange();});

       // window.setTimeout(levelChange(), 4600);

       // $('body').fadeOut(4000, levelChange());
    

        // setTimeout(function(){$('body').fadeOut(4000; levelChange();}, 2000);

    }

    beetle.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        beetle.body.velocity.x = -180;

        beetle.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        beetle.body.velocity.x = 180;

        beetle.animations.play('right');
    }
    else
    {
        //  Stand still
        beetle.animations.stop();

        beetle.frame = 2;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && beetle.body.touching.down)
    {
        beetle.body.velocity.y = -350;
    }


  }

  function render(){

    // game.debug.cameraInfo(game.camera, 32, 32);

  }
