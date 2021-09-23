const comboBox = document.getElementById('day');
const section = document.getElementsByTagName('section')[1];

const schedule = [{
    senin: [{
        course: "",
        scu: "",
        time: "",
        lecture: ""
    }],
    selasa: [{
        course: "",
        scu: "",
        time: "",
        lecture: ""
    }],
    rabu: [{
        course: "Sistem Pendukung Keputusan Ganjil A",
        scu: "3 SKS Teori",
        time: "8.50 AM - 11.30 AM",
        lecture: "Hairani, S.Kom., M.Eng"
    }],
    kamis: [{
        course: "",
        scu: "",
        time: "",
        lecture: ""
    }],
    jumat: [{
        course: "",
        scu: "",
        time: "",
        lecture: ""
    }],
    sabtu: [{
        course: "",
        scu: "",
        time: "",
        lecture: ""
    }],
    minggu: [{
        course: "",
        scu: "",
        time: "",
        lecture: ""
    }]
}];

comboBox.addEventListener('change', () => {
    section.innerHTML = "";
    const userInput = comboBox.value;
    logic(userInput);
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

function designUI(elements) {
    return /*html*/ `
    <div class="container">
        <ul>
            <li style="font-weight: bolder;">${elements.course}
            </li>
            <li>${elements.scu}</li>
            <li>${elements.time}</li>
            <li>${elements.lecture}</li>
        </ul>
    </div>`;
}