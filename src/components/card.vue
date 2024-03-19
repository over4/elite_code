<template>
    <a class="card2" href="#" @click.prevent="onCardClick">
        <h3>{{title}}</h3>
        <p class="small">{{difficulty}}</p>
        <div class="go-corner" >
            <div class="go-arrow" href={{link}}>
                <a>→</a>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    props: ['title','difficulty','link'],
    data() {
        return {};
    },
    methods: {
        onCardClick() {
            this.$emit("linkClickedCard",this.title)
        }
    }
}
</script>

<style scoped>
.card2 {
    color: white;
    display: block;
    top: 0px;
    position: relative;
    background-color: #9290C3;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    border: 1px solid #000000;

    &:hover {
        transition: all 0.2s ease-out;
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
        top: -4px;
        border: 1px solid #cccccc;
        background-color: #535C91;
    }

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -16px;
        right: -16px;
        background: #1B1A55;
        height: 32px;
        width: 32px;
        border-radius: 32px;
        transform: scale(2);
        transform-origin: 50% 50%;
        transition: transform 0.15s ease-out;
    }

    &:hover:before {
        transform: scale(2.15);
    }
}
</style>