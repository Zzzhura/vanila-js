
const bucket = document.getElementById('bucket');
bucket.addEventListener('mousedown', () => {
    bucket.querySelectorAll('path').forEach(el => {
        el.setAttribute('stroke', '#0763CD');
    })
})

bucket.addEventListener('mouseover', () => {
    bucket.querySelectorAll('path').forEach(el => {
        el.setAttribute('stroke', '#2581EB');
    })
})

bucket.addEventListener('mouseup', () => {
    bucket.querySelectorAll('path').forEach(el => {
        el.setAttribute('stroke', '#2581EB');
    })
})

bucket.addEventListener('mouseleave', () => {
    bucket.querySelectorAll('path').forEach(el => {
        el.setAttribute('stroke', '#6B7280');
    })
})
