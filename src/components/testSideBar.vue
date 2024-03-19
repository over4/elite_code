<template>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <nav class="sidebar">
        <header>
            <div class="image-text">


                <div class="text logo-text">
                    <span class="name">Elite Code 🧠</span>
                    <span class="profession">Free Learning Tool <br/> Updated Weekly</span>
                </div>
            </div>
        </header>

        <div class="menu-bar">
            <div class="menu">
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickArrayHashing">
                            <i class='bx bx-hash' ></i>
                            <span class="text nav-text">Arrays/Hashing</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickTwoPointers">
                            <i class='bx bx-sort' ></i>
                            <span class="text nav-text">Two Pointers</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickSlidingWindow">
                            <i class='bx bx-windows' ></i>
                            <span class="text nav-text">Sliding Window</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickStack">
                            <i class='bx bxs-coin-stack'></i>
                            <span class="text nav-text">Stack</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickBinarySearch">
                            <i class='bx bx-transfer-alt'></i>
                            <span class="text nav-text">Binary Search</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickLinkedList">
                            <i class='bx bx-link' ></i>
                            <span class="text nav-text">Linked List</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickTrees">
                            <i class='bx bxs-tree'></i>
                            <span class="text nav-text">Trees</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickTries">
                            <i class='bx bx-list-check' ></i>
                            <span class="text nav-text">Tries</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickHeapPriority">
                            <i class='bx bx-add-to-queue' ></i>
                            <span class="text nav-text">Heap/Priority</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickBackTracking">
                            <i class='bx bxs-rewind-circle'></i>
                            <span class="text nav-text">Backtracking</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickGraphs">
                            <i class='bx bx-infinite' ></i>
                            <span class="text nav-text">Graphs</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickGreedy">
                            <i class='bx bx-credit-card' ></i>
                            <span class="text nav-text">Greedy</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#" @click.prevent="onClickIntervals">
                            <i class='bx bx-transfer' ></i>
                            <span class="text nav-text">Intervals</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom-content">
            <div class="end">
                <div class="icons">
                    <div>
                        <a href="https://www.linkedin.com/in/riley-overland-1706b9248/">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/over4">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="copyright">© {{ currYear }} Riley Overland, All rights reserved</div>
            </div>
        </div>
    </nav>
</template>
<script>
const currYear = new Date().getFullYear()
export default {
    data() {
        return {
            currYear: currYear,
        };
    },
    methods: {
        onClickArrayHashing(){
            this.$emit('linkClickedArrayHashing')
        },
        onClickTwoPointers(){
            this.$emit('linkClickedTwoPointers')
        },
        onClickSlidingWindow(){
            this.$emit('linkClickedSlidingWindow')
        },
        onClickStack(){
            this.$emit('linkClickedStack')
        },
        onClickBinarySearch(){
            this.$emit('linkClickedBinarySearch')
        },
        onClickLinkedList(){
            this.$emit('linkClickedLinkedList')
        },
        onClickTrees(){
            this.$emit('linkClickedTrees')
        },
        onClickTries(){
            this.$emit('linkClickedTries')
        },
        onClickHeapPriority(){
            this.$emit('linkClickedHeapPriority')
        },
        onClickBackTracking(){
            this.$emit('linkClickedBackTracking')
        },
        onClickGraphs(){
            this.$emit('linkClickedGraphs')
        },
        onClickGreedy(){
            this.$emit('linkClickedGreedy')
        },
        onClickIntervals(){
            this.$emit('linkClickedIntervals')
        },
    },
};
</script>
<style scoped>
/* Google Font Import - Poppins *
/* ===== Sidebar ===== */
.sidebar {
    /*position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    height: 100%;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100;
}
.bx{
    color: white;
    padding-right: 10px;
    padding-left: 10px;
}

/* ===== Reusable code - Here ===== */
.sidebar li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar .text,
.sidebar .icon {
    color: var(--text-color);
    transition: var(--tran-03);
}

.sidebar .text {
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}
/* =========================== */

.sidebar header {
    position: relative;
}

.sidebar header .image-text {
    display: flex;
    align-items: center;
}

.sidebar header .logo-text {
    display: flex;
    flex-direction: column;
}

header .image-text .name {
    padding-top: 5px;
    font-size: 18px;
    font-weight: 600;
}

header .image-text .profession {
    font-size: 16px;
    margin-top: -2px;
    display: block;
}

.sidebar header .image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar header .image img {
    width: 40px;
    border-radius: 6px;
}
.sidebar .menu {
    margin-top: 40px;
    width: 100%;
}


.sidebar li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}

.sidebar li a:hover {
    background-color: var(--primary-color);
}

.sidebar li a:hover .icon,
.sidebar li a:hover .text {
    color: var(--sidebar-color);
}

.sidebar .menu-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
}

.menu-bar::-webkit-scrollbar {
    display: none;
}

.contact {
    display: flex;
    flex-direction: row;
}

.end {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.6;
    width: 100%;
    font-family: sans-serif;
    transition: all 0.3s ease;
}

.icons {
    display: flex;
    flex-direction: row; 
}

.icon {
    padding: 0;
    margin: 0;
    max-width: 200px;
    max-height: 200px;
    width: 20%;
    height: 20%;
}

.icons a:hover {
    color: #000000;
    /* Example hover color: change as needed */
    transform: translateY(-10px);
    /* Moves the icon up by 5px on hover */
}

.end a:hover {
    opacity: 1;
    /* Full opacity on hover */
}

.end svg {
    height: 20%;
    width: 20%;
    padding: 0;
    margin: 0;
}

.icons a {
    display: inline-flex;
    /* Ensure this is compatible with transform */
    justify-content: center;
    /* Center the content if using flex */
    align-items: center;
    /* Center vertically if using flex */
    opacity: 0.8;
    /* Starting opacity */
    padding: 10px;
    transition: transform 0.3s ease;
}

.copyright {
    flex-shrink: 0;
    flex-grow: 0;
    font-size: small;
    text-align: center;
    color: black;
    opacity: 0.7;
}
</style>