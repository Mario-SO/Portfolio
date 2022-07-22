<script>
    export let link;
    export let name;
    export let emoji;
</script>

<div>
    {emoji} <a href={link} target="_blank">{name}</a>
</div>

<style>
    a {
        color: #ffffff;
    }
</style>
