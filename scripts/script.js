window.onload = () => {

    //phone navbar

    const button = document.querySelector('#menuIcon');

    posX = window.pageYOffset;

    button.addEventListener('click', () => {
        document.querySelector('#phoneNavBar').classList.toggle('fullSize') ?
            window.onscroll = () => window.scrollTo(0, 0) :
            window.onscroll = () => {};

        document.querySelector('.navBar').classList.toggle('bgCol');
        button.classList.toggle('fa-bars');
        button.classList.toggle('fa-xmark');
        window.scrollTo(0, 0);
    })



    //header text

    document.querySelector('.firstDiv').style.fontSize = '5.1em';
    document.querySelector('.secDiv').style.fontSize = '1em';

    //cards

    products.forEach(product => {
        const card = document.createElement('div'),
            container = document.createElement('div'),
            img = document.createElement('img'),
            h3 = document.createElement('h3'),
            p = document.createElement('p');

        card.classList.add('card');

        img.classList.add('icon');
        img.alt = product.title;
        img.src = product.img;

        h3.classList.add('title');
        h3.innerText = product.title;

        p.classList.add('description');
        p.innerText = product.description;

        container.append(img, h3, p);
        card.append(container);

        document.querySelector('#cardsContainer').appendChild(card)
    });

    //counter

    let count = 0,
        bg = backg[0].img;

    const counter = document.querySelector('#imageShowed'),
        dot1 = document.querySelector('#dot1'),
        dot2 = document.querySelector('#dot2'),
        dot3 = document.querySelector('#dot3');

    counter.style.cssText = `background-image: url('images/${bg}');'`;
    document.querySelector('#dot1').style.color = 'white';

    setInterval(() => {
        count++ > 210 ? count = 0 : ':)';

        if (count < 70) bg = backg[0].img;
        else if (count < 140) bg = backg[1].img;
        else bg = backg[2].img;

        dot1.style.color = bg == backg[0].img ? 'white' : 'rgba(255, 255, 255, 0.4)';
        dot2.style.color = bg == backg[1].img ? 'white' : 'rgba(255, 255, 255, 0.4)';
        dot3.style.color = bg == backg[2].img ? 'white' : 'rgba(255, 255, 255, 0.4)';
        counter.style.cssText = `background-image: url('images/${bg}');'`;
    }, 100)

    dot1.addEventListener('click', () => count = 0);
    dot2.addEventListener('click', () => count = 70);
    dot3.addEventListener('click', () => count = 140);
    //counter.addEventListener('click', () => count += 70);

}