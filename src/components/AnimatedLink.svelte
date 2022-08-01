<script>
    export let link;
    export let name;
    export let emoji;
</script>

<div>
    <span class="emoji">{emoji}</span>
    <a href={link} target="_blank"> {name}</a>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

    a {
        font-family: "Press Start 2P", cursive;
        font-size: 0.64em;
        color: #f23557;
        text-decoration: wavy underline;
    }

    div {
        display: inline-flex;
    }

    .emoji {
        margin-right: 10px;
        animation-name: bounce;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    @keyframes bounce {
        0% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(-10px);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>
