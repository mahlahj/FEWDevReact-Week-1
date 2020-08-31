import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardBody, CardImg, } from 'reactstrap';

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
    }

    function RenderComments({comments}) {
        if (array.length != 0) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return ()
                        })}
                        <li>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                year:'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    </ul>
                    )}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.dish =! null)
            return (
                <div onClick="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.dish.comments} />
                </div>
                </div>
            )
        } else {
            dish = <div></div>
        }
        return (
            <div className="container">
                {dish}
            </div>
        );
    }
}

export default DishDetail;