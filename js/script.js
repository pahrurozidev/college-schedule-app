const comboBox = document.getElementById('day');
const section = document.getElementsByTagName('section')[1];
const showAll = document.querySelector('.show-all');
const p = showAll.querySelector('p');
const option = comboBox.querySelectorAll('option');

const form = document.querySelector('.form');
form.classList.toggle('slide');

showAll.addEventListener('click', () => {
    showAll.classList.toggle('to-right');
})

const schedule = [{
    senin: [{
        course: "",
        day: "senin",
        scu: "",
        time: "",
        lecture: ""
    }],
    selasa: [{
        course: "",
        day: "selasa",
        scu: "",
        time: "",
        lecture: ""
    }],
    rabu: [{
        course: "Sistem Pendukung Keputusan Ganjil A",
        day: "rabu",
        scu: "3 SKS Teori",
        time: "8.50 AM - 11.30 AM",
        lecture: "Hairani, S.Kom., M.Eng"
    }],
    kamis: [{
        course: "Pemrograman Linier Ganjil C",
        day: "kamis",
        scu: "3 SKS",
        time: "7.40 PM - 10.10 PM",
        lecture: "Ahmad, M.Pd"
    }],
    jumat: [{
        course: "",
        day: "jumat",
        scu: "",
        time: "",
        lecture: ""
    }],
    sabtu: [{
        course: "",
        day: "sabtu",
        scu: "",
        time: "",
        lecture: ""
    }],
    minggu: [{
        course: "",
        day: "Minggu",
        scu: "",
        time: "",
        lecture: ""
    }]
}];

p.addEventListener('click', (e) => {
    section.innerHTML = "";
    showAll.classList.toggle('to-right');

    schedule.forEach(element => {
        element.minggu.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
        element.sabtu.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
        element.jumat.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
        element.kamis.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
        element.rabu.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
        element.selasa.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
        element.senin.forEach(el => {
            section.insertAdjacentHTML("afterbegin", designUI(el));
        });
    });

    e.stopPropagation();
})

comboBox.addEventListener('change', () => {
    section.innerHTML = "";
    const userInput = comboBox.value;
    logic(userInput);
        console.log(option);
    });

function logic(day) {
    schedule.forEach(element => {
        if (day == 'senin') {
            element.senin.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        } else if (day == 'selasa') {
            element.selasa.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        } else if (day == 'rabu') {
            element.rabu.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        } else if (day == 'kamis') {
            element.kamis.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        } else if (day == 'jumat') {
            element.jumat.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        } else if (day == 'sabtu') {
            element.sabtu.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        } else if (day == 'minggu') {
            element.minggu.forEach(el => {
                section.insertAdjacentHTML("afterbegin", designUI(el));
            });
        }
    });
}

function firstUpperCase(el) {
    let splitStr = el.day.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function designUI(elements) {
    const firstUpper = firstUpperCase(elements);
    return /*html*/ `
    <div class="container">
        <ul>
            <h3>${(firstUpper) ? (firstUpper) : ""}</h3>
            <li style="font-weight: bolder;">${elements.course}
            </li>
            <li>${elements.scu}</li>
            <li>${elements.time}</li>
            <li>${elements.lecture}</li>
        </ul>
    </div>`;
}