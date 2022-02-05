import {DateTime, Info} from "luxon";

export class Example {
    constructor(selector, onSelect) {
        this.$el = document.querySelector(selector)
        this.now = DateTime.local()
        this.weekdays = Info.weekdays("short")
        this.onSelect = onSelect
        this.#setup()
        this.#render()
        this.$info = this.$el.querySelector("[data-type='info']")
        this.$days = this.$el.querySelector("[data-type='days']")
    }

    #render() {
        this.$el.classList.add("calendar")
        this.$el.innerHTML = this.getTemplate()
    }

    #updater() {
        this.$info.innerText = `${this.now.monthLong} ${this.now.year}`
        this.$days.innerHTML = this.#getRowsWithDays()
    }

    getTemplate() {
        const info = `${this.now.monthLong} ${this.now.year}`
        const weekdays = this.weekdays.map(day => `<span class="calendar__weekday">${day}</span>`)
        const days = this.#getRowsWithDays()
        return `
            <div class="calendar__head">
                <button class="calendar__btn calendar__btn-prev" data-type="prev"><</button>
                <span data-type="info" class="calendar__info">
                ${info}
                </span>
                <button class="calendar__btn calendar__btn-next" data-type="next">></button>
            </div>
            <div class="calendar__weekdays">
               ${weekdays.join("")}
            </div>
            <div data-type="days" class="calendar__days">
                ${days}
            </div>`
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener("click", this.clickHandler)
    }

    select(day) {
        this.$el.querySelectorAll('[data-type="day"]').forEach(($el) => {
            $el.classList.remove("active")
        })
        this.$el.querySelector(`[data-day="${day}"]`).classList.add("active")
        this.onSelect && this.onSelect(day)
    }

    clickHandler(event) {
        const {type} = event.target.dataset
        switch (type) {
            case "day":
                const {day} = event.target.dataset
                this.select(day)
                break;
            case "prev":
                this.now = this.now.minus({month: 1})
                this.#updater()
                break
            case "next":
                this.now = this.now.plus({month: 1})
                this.#updater()
                break;
        }
    }

    #getRowsWithDays() {
        let rowsWithDays = ""
        let day = 1;
        const firstDayInMonth = DateTime.local(this.now.year, this.now.month, 1).weekday
        const rowsQuantity = this.now.daysInMonth / this.weekdays.length
        const daysInMonth = this.now.daysInMonth
        for (let i = 0; i < rowsQuantity; i++) {
            let row = "<div class='calendar__days-row'>"
            for (let j = 1; j <= this.weekdays.length; j++) {
                const isEmptyCell = j < firstDayInMonth && i === 0
                if (isEmptyCell) {
                    row += "<span class='calendar__day'></span>"
                } else if (day <= daysInMonth) {
                    row += `<span class="calendar__day" data-day=${day} data-type="day">${day}</span>`
                    day++
                } else {
                    row += "<span class='calendar__day'></span>"
                }
            }
            row += '</div>'
            rowsWithDays += row;
        }
        return rowsWithDays
    }
}
