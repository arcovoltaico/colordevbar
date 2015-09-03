# colordevbar
Change a color, and your web will adapt graciously. Check a suggested palette when developing.


##What is this about

Imagine you can:
- Change harmonically the colors from your site just by defining the main tone (i.e. the corporative one) on a Less variable.
- You can map each element of your web to a color from the same Less file
- When you are developing you can show or hide the generated color palette in order to choose which one assign to an element

![Active bar](/screen1.png)
![Minimized bar](/screen2.png)
> Yes! We were inspired by the nice Symfony devbar

##How to use it

Just clone this project or download it. There is a demo you can try.
On your project you’ll need to include/import the devbar.html and add the included js & css on your html head.
It’s up to you to include this bar just only when running your site on development mode.
And last but not least:
- On colors.less you can change the main color, from where everyone else is generated. Also you can tweak the generating rules of them. You’ll notice that we are relying on a triangle color relationship, shouldn’t we ? ;-)
- On colormap.less we are mapping the color variables to some descriptive elements/parts variables used on your web views/partial


Authorship:

Idea & Design: Jordi Alhambra (@arcovoltaico)

SVG Design: Jorge Benítez (@signados)
