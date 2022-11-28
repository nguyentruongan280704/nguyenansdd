import React, { Component } from 'react';

class Card extends Component {
    state = {}
    render() {
        return (
            <>
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://sg.cdnki.com/gai-xinh-mac-bikini-xuyen-thau---aHR0cHM6Ly9nZW50bGVub2JyYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDMvZ2FpLXhpbmgtbWFjLWJpa2luaS1tYXUtdHJhbmctMS5qcGc=.webp" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://lh4.googleusercontent.com/qLJfG51K-Fdo2JLGqOv40k4ZZeohc7aQihgEsdajk5JbpAV3mjJMezW7DiR7ul9asolcYgpklU0K2TsZcXJ294y547rQSfklFxgRR7WVgKd_PuL2r48VCUc6xm3QusD_qf5eAOJa51k20ci8MSY4xjc" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://kenh14cdn.com/thumb_w/650/2017/a-1494302492988.jpg" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;